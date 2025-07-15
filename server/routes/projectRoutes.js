import express from 'express';
import Project from '../models/Project.js';
import multer from 'multer';

const router = express.Router();
const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});
const upload = multer({ storage });

router.post('/', upload.single('image'), async (req, res) => {
  const { name, description } = req.body;
  const project = new Project({
    name,
    description,
    image: req.file.filename,
  });
  await project.save();
  res.json(project);
});

router.get('/', async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

export default router;