const sharp = require('sharp');


const inputPath = 'upload/images/1701752941627fffffffff.jpg';
const basePath = 'upload/images/resize-image';

// Resize options
const resizeOptions = [
    { width:300, height:200, suffix:'small'},
    { width:400, height:300, suffix:'medium'},
    { width:500, height:400, suffix:'large'}    
];

resizeOptions.forEach((config)=>{

    const {width, height, suffix} = config
    outputPath = `${basePath}-${suffix}.jpg`


    // Resize the image
    sharp(inputPath)
        .resize(width,height,suffix)
        .toFile(outputPath, (err, info) => {
            if (err) {
                console.error(err);
            } else {
                console.log('Image resized successfully for ${suffix}', info);
            }
        });

}   )

