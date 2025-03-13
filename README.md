# Image Optimization Tool

A Node.js-based tool for optimizing and converting images to WebP format. This tool processes images in bulk, reducing their file size while maintaining quality, and converts them to the modern WebP format for better web performance.

## Features

- Converts images to WebP format
- Supports multiple input formats (JPG, JPEG, PNG, GIF, BMP)
- Configurable image quality
- Optional image resizing
- Bulk processing support
- Maintains directory structure

## Prerequisites

- Node.js (version 12 or higher)
- npm (Node Package Manager)

## Installation

1. Clone this repository:
   ```bash
   git clone git@github.com:kinsonlcy/optimize-image.git
   cd optimize-image
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Create an `input-images` directory in your project root and place your images there.

2. Basic usage:
   ```javascript
   const processImagesInDirectory = require('./main');

   processImagesInDirectory('./input-images', './output-images', {
       quality: 80
   });
   ```

### Configuration Options

You can customize the image processing with the following options:

```javascript
{
    quality: 80,    // WebP quality (0-100)
    width: null,    // Target width (null maintains original)
    height: null    // Target height (null maintains original)
}
```

### Example

```javascript
processImagesInDirectory('./input-images', './output-images', {
    quality: 50,
    width: 800,
    height: 600
});
```

## Output

Processed images will be:
- Saved in the specified output directory
- Converted to WebP format
- Named as `originalname.webp`

## Error Handling

The tool includes error handling for individual images, ensuring that:
- The process continues even if one image fails
- Error messages are logged to the console
- Successfully processed images are confirmed in the console

## Dependencies

- [sharp](https://sharp.pixelplumbing.com/) - High-performance image processing
- Node.js built-in modules (`fs`, `path`)

## License

This project is licensed under the MIT License - see the LICENSE file for details. 