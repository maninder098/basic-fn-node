const express = require('express');
const multer = require('multer');
const sharp = require('sharp');

const app = express();
const port = 3000;

app.use("/upload", express.static("upload"));


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'upload/images');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname);
    },
});

const upload = multer({ storage: storage });

// Define a route for uploading and resizing images
app.post('/upload', upload.single('image'), (req, res) => {
    // Check if a file is provided
    if (!req.file) {
        return res.status(400).json({ error: 'No file provided' });
    }

    // Resize options
    const resizeOptions = {
        width: 300,
        height: 200,
    };

    const inputPath= `upload/images/${req.file.filename}`
    console.log("inputfile>>>>>>>",inputPath);
    const basePath = `upload/images/resized-${req.file.originalname}`;

    // Use sharp to resize the image from the buffer in memory
    sharp(inputPath)
        .resize(resizeOptions)
        .toFile(basePath,(err,info)=>{
            if (err) {
                console.error(err);
            } else {
                console.log('Image resized successfully', info);
                res.send({sucess:true,imageurl:`http://localhost:3000/${basePath}`})
            }
        })
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
