# CV File Setup Instructions

To make the CV download work properly, you need to add your CV PDF file to the public folder:

## Steps:

1. **Add your CV file:**
   - Place your CV PDF file in the `public` folder
   - Name it `cv.pdf`
   - The full path should be: `C:\Users\ADITI\Downloads\masterPortfolio-master\portfolio\public\cv.pdf`

2. **Alternative naming:**
   - If you want to keep your current filename, update the href path in the Hero component
   - Change `/cv.pdf` to `/your-actual-filename.pdf`

3. **File requirements:**
   - PDF format recommended
   - Keep file size under 5MB for faster downloads
   - Ensure the PDF is optimized and readable

## Current setup:
- The download button will look for `/cv.pdf` in the public folder
- When clicked, it will download as `Aditi_Ghosh_CV.pdf`
- The download is handled client-side with JavaScript

## If the file doesn't exist:
- The browser will show a "file not found" error
- Make sure the file path matches exactly
- Check that the file is in the `public` directory (not `public/assets` or subfolder)

The download functionality is now implemented and will work once you add the CV file to the public folder.