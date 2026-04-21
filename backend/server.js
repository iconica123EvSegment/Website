import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import fs from 'fs';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import { connectDB } from './config/db.js';
import { formModelMap } from './models/formModels.js';
import { validateSubmission } from './utils/validation.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const uploadsDir = path.join(__dirname, 'uploads');

if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, uploadsDir),
  filename: (_req, file, cb) => {
    const safeName = file.originalname.replace(/\s+/g, '-');
    cb(null, `${Date.now()}-${safeName}`);
  }
});

const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024
  }
});

const app = express();
const allowedOrigins = (process.env.CLIENT_URL || 'http://localhost:5173')
  .split(',')
  .map((origin) => origin.trim());

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error('CORS blocked for this origin.'));
    }
  })
);
app.use(express.json());
app.use('/uploads', express.static(uploadsDir));

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, message: 'Iconica backend is running.' });
});

app.post('/api/forms/:formType', upload.single('cv'), async (req, res) => {
  try {
    const { formType } = req.params;
    const payload = {
      ...req.body
    };

    const validation = validateSubmission(formType, payload);
    if (!validation.valid) {
      return res.status(400).json({
        success: false,
        message: validation.message
      });
    }

    const Model = formModelMap[formType];
    const submission = await Model.create({
      ...payload,
      file: req.file
        ? {
            originalName: req.file.originalname,
            mimeType: req.file.mimetype,
            filename: req.file.filename,
            path: req.file.path,
            size: req.file.size
          }
        : undefined
    });

    return res.status(201).json({
      success: true,
      message: 'Form submitted successfully.',
      submissionId: submission._id
    });
  } catch (error) {
    console.error('Form submission failed:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error while saving form.'
    });
  }
});

app.get('/api/forms', async (_req, res) => {
  try {
    const queryEntries = Object.entries(formModelMap);
    const submissionGroups = await Promise.all(
      queryEntries.map(async ([formType, Model]) => {
        const records = await Model.find().sort({ createdAt: -1 }).limit(25).lean();
        return records.map((record) => ({
          formType,
          ...record
        }));
      })
    );

    const submissions = submissionGroups
      .flat()
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      .slice(0, 100);

    res.json({
      success: true,
      data: submissions
    });
  } catch (error) {
    console.error('Failed to fetch submissions:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while fetching submissions.'
    });
  }
});

const PORT = process.env.PORT || 5000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection failed:', error);
    process.exit(1);
  });
