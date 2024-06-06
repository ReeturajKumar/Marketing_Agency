const express = require('express');
const router = express.Router();
const Contact = require('../Models/ContactModel');

router.post('/', async (req, res) => {
  try {
    const { name, email, phone, company, message } = req.body;

    const newContact = new Contact({
      name,
      email,
      message,
    });

    await newContact.save();

    res.status(201).json({ success: true, message: 'Contact form submitted successfully' });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
});

module.exports = router;
