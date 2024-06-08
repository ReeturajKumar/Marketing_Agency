const express = require('express');
const cors = require('cors');
const connectDB = require('./server/config/db');
const path = require ('path')
const authRoutes = require('./server/Route/authRoute');
const contactRoutes = require('./server/Route/ContactRoute');
require('dotenv').config();

connectDB();


const__dirname = path.resolve();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/contact', contactRoutes);

app.use(express.static(path.join(__dirname,'./client/dist')));
app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
