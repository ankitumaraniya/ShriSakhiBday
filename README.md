# Shri Sakhi Birthday Website — V5 Local Media Edition

This version fixes the two problems in the screenshots:
1. Low-quality/cropped generated images have been removed from the website.
2. Text is no longer baked into the cake/finale images, so website text cannot overlap text inside an image.

## Folder structure

images/
  gallery/
    photo-1.jpg   ← cake / Make a Wish image
    photo-2.jpg   ← gallery image 1
    photo-3.jpg   ← gallery image 2
    photo-4.jpg   ← gallery image 3
    photo-5.jpg   ← gallery image 4
    photo-6.jpg   ← final sunflower-field image
  decor/
    blue-butterfly.png

music/
  song.mp3        ← your song

## IMPORTANT: image filenames
The website currently expects `.jpg` files exactly:
photo-1.jpg, photo-2.jpg, ... photo-6.jpg

If your files are PNG, either rename/convert them to JPG or change `.jpg` to `.png` in index.html.

Use the original/full-resolution photos. Do not use screenshots of photos, because screenshots will look soft when enlarged on a laptop.

## Adding more photos
Copy another polaroid block in index.html and change its filename to photo-7.jpg, photo-8.jpg, etc.

## Music
Put your audio file in the `music` folder and name it:
song.mp3

The website will then use it automatically after deployment. Browsers normally require the visitor to press Play before audio starts.

## Birthday lock
Before 4 November 2026 only the countdown is visible.
On 4 November 2026 the full scrollable birthday page unlocks.

## Testing now
In script.js, temporarily change:
const birthday=new Date(2026,10,4,0,0,0)

to a date in the past. Restore it before publishing.

## Deployment
Upload the entire folder structure unchanged to GitHub Pages / Netlify / Cloudflare Pages.
Do not upload only index.html; the `images`, `music`, CSS, and JS files must stay with it.
