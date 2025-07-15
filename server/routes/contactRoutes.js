import express from 'express';
import Contact from '../models/Contact.js';

const router = express.Router();

// Add contact form submission
router.post('/', async (req, res) => {
  try {
    const { fullName, email, mobile, city } = req.body;
    const contact = new Contact({ fullName, email, mobile, city });
    await contact.save();
    res.status(201).json(contact);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all contact form responses
router.get('/', async (req, res) => {
  const contacts = await Contact.find();
  res.json(contacts);
});

export default router;