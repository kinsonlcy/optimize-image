const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function processImagesInDirectory(inputDir, outputDir, options = {}) {
    // Default options
    const defaultOptions = {
        quality: 80,
        width: null,  // If not specified, maintains original width
        height: null  // If not specified, maintains original height
    };
    
    const settings = { ...defaultOptions, ...options };

    // Create output directory if it doesn't exist
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    // Get all files in the input directory
    const files = fs.readdirSync(inputDir);

    // Filter for image files (you can add more extensions if needed)
    const imageFiles = files.filter(file => 
        /\.(jpg|jpeg|png|gif|bmp)$/i.test(file)
    );

    // Process each image
    for (const file of imageFiles) {
        const inputPath = path.join(inputDir, file);
        const outputPath = path.join(outputDir, `${path.parse(file).name}.webp`);

        try {
            let sharpInstance = sharp(inputPath);

            // Resize if width or height is specified
            if (settings.width || settings.height) {
                sharpInstance = sharpInstance.resize(settings.width, settings.height, {
                    fit: 'inside',
                    withoutEnlargement: true
                });
            }

            // Convert to WebP with specified quality
            await sharpInstance
                .webp({ quality: settings.quality })
                .toFile(outputPath);

            console.log(`Successfully processed: ${file}`);
        } catch (error) {
            console.error(`Error processing ${file}:`, error);
        }
    }
}

processImagesInDirectory('./input-images', './output-images', {
    quality: 50
});