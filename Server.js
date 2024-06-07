// server.js
const express = require('express');
const cors = require('cors');
const connectDB = require('./server/config/db');
const authRoutes = require('./server/Route/authRoute');
const contactRoutes = require('./server/Route/ContactRoute');
require('dotenv').config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/contact', contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
