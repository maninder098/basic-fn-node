const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');
const path = require("path");
const { date } = require('joi');

const app = express();
const port = 6002;

 app.use("/upload", express.static("upload"));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/imageStore', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

// Define a Mongoose schema for image data
const imageSchema = new mongoose.Schema({
  filename: String,
  originalname: String,
  path: String,
});

const Image = mongoose.model('Image', imageSchema);

// Configure Multer to store images in the 'uploads' folder
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'upload/images');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage });

// Handle file upload
app.post('/upload', upload.single('image'), async (req, res) => {
  try {
    sharp(req.file.path)
    .resize({width:350,height:250})
    .toFile('upload/images/resize-image',(err, info) => {
      if (err) {
          console.error(err);
      } else {
          console.log('Image resized successfully', info);
      }
  })

    // Create a new Image document in MongoDB
    const newImage = new Image({
      filename: req.file.filename,
      originalname: req.file.originalname,
      path: `http://localhost:6002` + "/" + `${req.file.path}`
    });
    // console.log("newImage>>>>>>",newImage);
    console.log("pathhhhhh",req.file.path);
    // Save the image details in the database
    await newImage.save();

    res.status(201).json({ success: true, message: 'Image uploaded successfully',data:newImage.path });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error uploading image' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
