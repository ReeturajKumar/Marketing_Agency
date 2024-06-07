const express = require('express');
const contactRouter = express.Router();
const requireAuth = require('../middleware/middleware');
const Contact = require('../Models/ContactModel');

// Fetch contacts
contactRouter.get('/contacts', requireAuth, async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json({ success: true, data: contacts });
  } catch (error) {
    console.error('Error fetching contact form submissions:', error);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
});

// Submit contact form
contactRouter.post('/', async (req, res) => {
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

module.exports = contactRouter;
