import express from 'express';
import Client from '../models/Client.js';
import multer from 'multer';

const router = express.Router();

const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage });

// Add client
router.post('/', upload.single('image'), async (req, res) => {
  try {
    const { name, description, designation } = req.body;
    const client = new Client({
      name,
      description,
      designation,
      image: req.file.filename
    });
    await client.save();
    res.status(201).json(client);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all clients
router.get('/', async (req, res) => {
  const clients = await Client.find();
  res.json(clients);
});

export default router;