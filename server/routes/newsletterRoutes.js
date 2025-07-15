import express from 'express';
import Newsletter from '../models/Newsletter.js';

const router = express.Router();

// Add newsletter subscriber
router.post('/', async (req, res) => {
  try {
    const { email } = req.body;
    const newsletter = new Newsletter({ email });
    await newsletter.save();
    res.status(201).json(newsletter);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all subscribers
router.get('/', async (req, res) => {
  const subscribers = await Newsletter.find();
  res.json(subscribers);
});

export default router;