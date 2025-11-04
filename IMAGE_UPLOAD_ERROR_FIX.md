# Image Upload Error: Invalid JPEG

## Problem
Error: "Invalid image, could not read metadata - Invalid SOS parameters for sequential JPEG"

## Cause
The image file you're trying to upload is either:
1. Corrupted JPEG file
2. Progressive JPEG (not fully supported)
3. CMYK color mode (should be RGB)
4. Contains invalid metadata

## Solutions

### Option 1: Convert the Image (Recommended)

**Using Online Tool:**
1. Go to: https://convertio.co/jpg-converter/
2. Upload your image
3. Convert to PNG or standard JPEG
4. Download and try uploading again

**Using Paint (Windows):**
1. Right-click image → Open with → Paint
2. File → Save As → JPEG picture
3. Save with a new name
4. Try uploading the new file

**Using an Image Editor:**
1. Open image in any editor (Paint, Photoshop, GIMP, etc.)
2. Make sure color mode is RGB (not CMYK)
3. Save as PNG or JPEG
4. Try uploading

### Option 2: Use a Different Image

Try uploading a different image file to verify Sanity is working correctly.

### Option 3: Use PNG Instead

PNG format is more reliable:
1. Convert your image to PNG format
2. Upload the PNG file

### Option 4: Optimize the Image

**Using TinyPNG:**
1. Go to: https://tinypng.com/
2. Upload your image
3. Download the optimized version
4. Try uploading to Sanity

### Option 5: Take a Screenshot

If the image is from the web:
1. Take a screenshot of the image
2. Save as PNG
3. Upload to Sanity

## Quick Fix Commands

### Using ImageMagick (if installed):
```bash
# Convert to standard JPEG
magick input.jpg -sampling-factor 4:2:0 -strip -quality 85 output.jpg
```

### Using ffmpeg (if installed):
```bash
# Convert to PNG
ffmpeg -i input.jpg output.png
```

## Recommended Image Specs for Sanity:

- **Format**: PNG or standard JPEG (baseline, not progressive)
- **Color Mode**: RGB (not CMYK)
- **Max Size**: 5MB
- **Recommended Size**: 500x500px to 1000x1000px for profile images

## For Future Uploads:

1. Always use web-optimized images
2. Prefer PNG for profile pictures
3. Keep file size under 1MB
4. Use standard RGB color mode
5. Avoid progressive JPEGs

## Test with This:

Try uploading a simple image from:
- A screenshot you take
- A fresh download from Unsplash.com
- A newly created image in Paint

If a simple image works, the issue is definitely with the specific file you're trying to upload!
