```sh
# Requires ffmpeg in PATH

# Create an output folder to avoid overwriting PNGs
$output = "webp"
if (!(Test-Path $output)) {
    New-Item -ItemType Directory -Path $output | Out-Null
}

Get-ChildItem -Filter *.png | ForEach-Object {
    $input  = $_.FullName
    $name   = [System.IO.Path]::GetFileNameWithoutExtension($_.Name)
    $outputFile = Join-Path $output "$name.webp"

    ffmpeg -i "$input" -vf "scale=iw*0.6:ih*0.6" `
        -lossless 0 -quality 75 -compression_level 6 `
        "$outputFile"
}

```