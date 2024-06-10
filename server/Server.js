const express = require('express');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const authRoutes = require('./Route/authRoute');
const contactRoutes = require('./Route/ContactRoute');
const fs = require('fs');
require('dotenv').config();

mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/contact', contactRoutes);

const staticPath = path.join(__dirname, 'client', 'dist');
console.log(`Serving static files from: ${staticPath}`);
app.use(express.static(staticPath));

app.get('*', (req, res, next) => {
  const indexPath = path.join(staticPath, 'index.html');
  console.log(`Serving index.html from: ${indexPath}`);
  fs.access(indexPath, fs.constants.F_OK, (err) => {
    if (err) {
      console.error(`index.html not found: ${indexPath}`);
      return res.status(404).json({
        success: false,
        statusCode: 404,
        message: `ENOENT: no such file or directory, stat '${indexPath}'`
      });
    }
    res.sendFile(indexPath);
  });
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}!`);
});
