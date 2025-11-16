import { promises as fs } from 'fs';
import { spawn } from 'child_process';
import * as path from 'path';

const ROOT = path.join(process.cwd(), 'posters');
const SUPPORTED_EXT = ['.png', '.jpg', '.jpeg', '.webp'];

async function walk(dir: string): Promise<string[]> {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => {
      const res = path.resolve(dir, entry.name);
      return entry.isDirectory() ? walk(res) : Promise.resolve([res]);
    })
  );
  return Array.prototype.concat(...files);
}

function convert(input: string, output: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const ff = spawn(
      'ffmpeg',
      ['-y', '-i', input, '-vf', 'scale=500:-1', '-q:v', '70', '-compression_level', '6', output],
      { stdio: 'inherit' }
    );

    ff.on('error', reject);
    ff.on('close', (code) =>
      code === 0 ? resolve() : reject(new Error(`ffmpeg exited with code ${code}`))
    );
  });
}

async function main() {
  const allFiles = await walk(ROOT);

  const originalFiles = allFiles.filter((f) => {
    const ext = path.extname(f).toLowerCase();
    return SUPPORTED_EXT.includes(ext) && path.basename(f).startsWith('original');
  });

  for (const filePath of originalFiles) {
    const dir = path.dirname(filePath);
    const output = path.join(dir, '500xAAA.webp');

    // Skip whole folder if already converted
    try {
      await fs.access(output);
      console.log(`Skipping folder ${dir} (already converted).`);
      continue;
    } catch {
      // file does not exist → convert
    }

    console.log(`Converting: ${filePath} → ${output}`);
    await convert(filePath, output);
  }

  console.log('Done.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
