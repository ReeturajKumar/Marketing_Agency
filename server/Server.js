const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const contactRoutes = require('./Route/ContactRoute');
require('dotenv').config();

connectDB();

const app = express();

app.use(cors()); 
app.use(express.json());

app.use('/api/contact', contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
