// server.js
const express = require('express');
const multer = require('multer');
const fs = require('fs');
const axios = require('axios');
const FormData = require('form-data');
require('dotenv').config();

const app = express();
const upload = multer({ dest: 'uploads/' });
const API_KEY = process.env.REMOVE_BG_API_KEY;

app.use(express.static('public'));

app.post('/remove-bg', upload.single('image'), async (req, res) => {
  const filePath = req.file.path;

  try {
    // Build multipart/form-data body
    const form = new FormData();
    form.append('image_file', fs.createReadStream(filePath));
    form.append('size', 'auto');

    // Send request to Remove.bg
    const response = await axios.post(
      'https://api.remove.bg/v1.0/removebg',
      form,
      {
        headers: {
          ...form.getHeaders(),
          'X-Api-Key': API_KEY
        },
        responseType: 'arraybuffer'
      }
    );

    // Clean up temp file
    fs.unlinkSync(filePath);

    // Return the processed image
    res.set('Content-Type', 'image/png');
    res.send(response.data);

  } catch (err) {
    // Log the API error
    console.error(err.response?.data.toString() || err.message);
    res.status(500).send('Error removing background');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
