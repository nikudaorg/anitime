```sh
# Requires ffmpeg in PATH

Get-ChildItem -Filter *.png | ForEach-Object {
    $input  = $_.FullName
    $name   = [System.IO.Path]::GetFileNameWithoutExtension($_.Name)
    $outputFile = "$name.webp"

    ffmpeg -i "$input" -vf "scale=iw*1:ih*1" `
        -lossless 0 -quality 85 -compression_level 6 `
        "$outputFile"
}

```