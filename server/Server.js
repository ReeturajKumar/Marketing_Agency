const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const path = require('path');

const authRoutes = require('./Route/authRoute');
const contactRoutes = require('./Route/ContactRoute');
require('dotenv').config();

connectDB();

// Correct declaration of __dirname
const __dirname = path.resolve();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/contact', contactRoutes);

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
