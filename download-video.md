# How to Add a Video Background

## Option 1: Download a Free Tech Video

1. Go to [Pexels Videos](https://www.pexels.com/videos/) or [Pixabay Videos](https://pixabay.com/videos/)
2. Search for "technology", "digital", "cyber", or "abstract"
3. Download a free MP4 video (preferably 1920x1080 or similar)
4. Rename it to `tech-background.mp4`
5. Place it in the `public/videos/` folder

## Option 2: Use a Sample Video URL

You can also use a direct video URL by updating the video source in `LandingPage.jsx`:

```jsx
<source src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4" type="video/mp4" />
```

## Option 3: Create Your Own Video

Use tools like:
- Adobe After Effects
- Blender
- Canva Video
- Loom (for screen recordings)

## Recommended Video Specifications:
- Format: MP4
- Resolution: 1920x1080 or 1280x720
- Duration: 10-30 seconds (will loop)
- File size: Under 10MB for web performance
- Content: Abstract tech patterns, digital grids, or cyber aesthetics

## Current Setup:
The landing page is already configured to use a video background with a beautiful animated fallback. Just add your video file to `public/videos/tech-background.mp4` and it will automatically work!
