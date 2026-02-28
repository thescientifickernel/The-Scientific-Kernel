import express from 'express';
import { createServer as createViteServer } from 'vite';
import Database from 'better-sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const db = new Database('kernel.db');

// Initialize Database
db.exec(`
  CREATE TABLE IF NOT EXISTS guestbook (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    location TEXT NOT NULL,
    quote TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS topics (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT,
    votes INTEGER DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

async function startServer() {
  const app = express();
  app.use(express.json());

  // API Routes
  app.get('/api/guestbook', (req, res) => {
    const entries = db.prepare('SELECT * FROM guestbook ORDER BY created_at DESC').all();
    res.json(entries);
  });

  app.post('/api/guestbook', (req, res) => {
    const { name, location, quote } = req.body;
    if (!name || !location || !quote) return res.status(400).json({ error: 'Missing fields' });
    
    // Basic rate limiting could be added here
    const stmt = db.prepare('INSERT INTO guestbook (name, location, quote) VALUES (?, ?, ?)');
    stmt.run(name, location, quote);
    res.json({ success: true });
  });

  app.get('/api/topics', (req, res) => {
    const topics = db.prepare('SELECT * FROM topics ORDER BY votes DESC, created_at DESC').all();
    res.json(topics);
  });

  app.post('/api/topics', (req, res) => {
    const { title, description } = req.body;
    if (!title) return res.status(400).json({ error: 'Title is required' });
    
    const stmt = db.prepare('INSERT INTO topics (title, description) VALUES (?, ?)');
    stmt.run(title, description);
    res.json({ success: true });
  });

  app.post('/api/topics/:id/vote', (req, res) => {
    const { id } = req.params;
    const stmt = db.prepare('UPDATE topics SET votes = votes + 1 WHERE id = ?');
    stmt.run(id);
    res.json({ success: true });
  });

  // Vite middleware
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  const PORT = 3000;
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
