```sh
ffmpeg -i original.png -vf scale=640:-1 -q:v 50 small.webp
ffmpeg -i original.png -vf scale=1024:-1 -q:v 50 medium.webp
ffmpeg -i original.png -vf scale=1600:-1 -q:v 50 large.webp
ffmpeg -i original.png -q:v 50 xl.webp

```