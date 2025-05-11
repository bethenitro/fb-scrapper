import express, { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { getFbVideoInfo } from './facebook.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static frontend
app.use(express.static(path.join(__dirname, '../public')));

// API endpoint
app.get('/api/video-info', async (req: Request, res: Response) => {
  const url = req.query.url as string;
  if (!url) return res.status(400).json({ error: 'Missing url parameter' });
  try {
    const info = await getFbVideoInfo(url);
    res.json(info);
  } catch (e: any) {
    res.status(500).json({ error: e.message || 'Failed to fetch video info' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
