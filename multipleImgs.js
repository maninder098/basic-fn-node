const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');

const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017/imageStore', { useNewUrlParser: true, useUnifiedTopology: true });

// Define your mongoose model for storing image data
const Image = mongoose.model('Image', {
  filename: String,
  path: String,
});

// Set up Multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'upload/images'); // Specify your upload directory
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Use the original filename for storing
  },
});

const upload = multer({ storage: storage });

// Handle POST request for uploading images
app.post('/upload', upload.array('images', 5), async (req, res) => {
  try {
    // Save file details to MongoDB
    const files = req.files.map(file => {
      return {
        filename: file.originalname,
        path: file.path,
      };
    });

    console.log("files>>>>?????",files);

    const savedFiles = await Image.create(files);

    res.send(savedFiles);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
