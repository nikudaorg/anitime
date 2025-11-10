// available decoration types you already use
const types = ['t21', 't22', 't23', 't24', 't25'] as const;

type DecoType = (typeof types)[number];

function rand(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

/**
 * Generates JSX code string that you can paste into your React component.
 *
 * @param count how many decorations to scatter
 */
export function generateDecoCode(count = 15): string {
  const lines: string[] = [];

  for (let i = 0; i < count; i++) {
    const t: DecoType = types[Math.floor(Math.random() * types.length)];

    const x = `${rand(-10, 100).toFixed(0)}%`;
    const y = `${rand(-10, 100).toFixed(0)}%`;

    const rot = `${rand(0, 360).toFixed(0)}deg`;
    const width = `${rand(12, 35).toFixed(0)}%`;

    const flip = Math.random() > 0.5 ? ' flip' : '';

    lines.push(`<Deco l ${t} x="${x}" y="${y}" rot="${rot}" width="${width}"${flip} loc={loc} />`);
  }

  return lines.join('\n');
}

console.log(generateDecoCode(20));
