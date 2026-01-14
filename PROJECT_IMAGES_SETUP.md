# Project Images Setup Guide

To add images for your projects, you need to place image files in the `public` folder of your Next.js project.

## Current Image Paths Expected:

Place these images in the `public` folder:

1. **beacon.webp** - Already referenced for the Beacon project
2. **task-management.jpg** - Task Management App
3. **weather-dashboard.jpg** - Weather Dashboard
4. **social-dashboard.jpg** - Social Media Dashboard  
5. **portfolio-website.jpg** - Portfolio Website
6. **chat-application.jpg** - Chat Application

## File Structure:
```
portfolio/
├── public/
│   ├── beacon.webp ✅ (already exists)
│   ├── task-management.jpg ⚠️ (add this)
│   ├── weather-dashboard.jpg ⚠️ (add this)
│   ├── social-dashboard.jpg ⚠️ (add this)
│   ├── portfolio-website.jpg ⚠️ (add this)
│   ├── chat-application.jpg ⚠️ (add this)
│   ├── pfp.jpg ✅ (your profile picture)
│   └── cv.pdf ⚠️ (your CV file)
```

## Image Requirements:

- **Format**: JPG, PNG, or WebP
- **Size**: Recommended 800x600px or 16:9 aspect ratio
- **File Size**: Keep under 500KB for faster loading
- **Quality**: High enough to showcase your projects clearly

## How to Add Images:

1. **Take Screenshots** of your projects (or use existing project images)
2. **Resize and Optimize** them to the recommended dimensions
3. **Rename** them to match the expected filenames above
4. **Copy** them to the `C:\Users\ADITI\Downloads\masterPortfolio-master\portfolio\public\` folder

## Alternative Approach:

If you want to use different filenames, update the `image` property in the projects array in `Projects.tsx`:

```javascript
{
  title: "Your Project",
  image: "/your-custom-filename.jpg",  // Update this path
  // ... other properties
}
```

## Fallback Behavior:

- If an image fails to load, it will automatically show a placeholder
- The placeholder includes an eye icon and "Add your project image here" text
- This ensures your portfolio still looks professional even without images

## Tips for Good Project Images:

- Use actual screenshots of your running applications
- Show the main interface or dashboard
- Avoid cluttered or busy screenshots
- Consider using a consistent style/theme across all images
- You can create mockups or use tools like Figma for better-looking project previews

Once you add the images to the public folder, they will automatically display in your portfolio!