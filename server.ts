import express from 'express';
import { createServer as createViteServer } from 'vite';
import Database from 'better-sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';
import cookieSession from 'cookie-session';
import { OAuth2Client } from 'google-auth-library';
import dotenv from 'dotenv';

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const db = new Database('kernel.db');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// Initialize Database
db.exec(`
  CREATE TABLE IF NOT EXISTS guestbook (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    location TEXT NOT NULL,
    quote TEXT NOT NULL,
    approved INTEGER DEFAULT 1,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS topics (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT,
    votes INTEGER DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS votes_tracking (
    topic_id INTEGER,
    ip_address TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (topic_id, ip_address)
  );

  CREATE TABLE IF NOT EXISTS guides (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    category TEXT NOT NULL,
    description TEXT NOT NULL,
    difficulty TEXT NOT NULL,
    readTime TEXT NOT NULL,
    publishedAt TEXT NOT NULL,
    content TEXT NOT NULL,
    is_published INTEGER DEFAULT 1
  );

  CREATE TABLE IF NOT EXISTS videos (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    url TEXT NOT NULL,
    thumbnail TEXT NOT NULL,
    description TEXT NOT NULL,
    category TEXT NOT NULL,
    publishedAt TEXT NOT NULL,
    is_published INTEGER DEFAULT 1
  );

  CREATE TABLE IF NOT EXISTS site_visits (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    path TEXT NOT NULL,
    ip_address TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

// Auth Middleware (Removed isAdmin)

async function startServer() {
  const app = express();
  app.use(express.json());
  app.use(cookieSession({
    name: 'session',
    keys: [process.env.SESSION_SECRET || 'kernel-secret'],
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
    secure: true,
    sameSite: 'none'
  }));

  // Track visits
  app.use((req, res, next) => {
    if (req.path.startsWith('/api')) return next();
    const ip = req.ip || req.headers['x-forwarded-for'] || 'unknown';
    db.prepare('INSERT INTO site_visits (path, ip_address) VALUES (?, ?)').run(req.path, ip.toString());
    next();
  });

  // Auth Routes
  app.get('/api/auth/google/url', (req, res) => {
    const redirectUri = `${process.env.APP_URL}/auth/google/callback`;
    const url = client.generateAuthUrl({
      access_type: 'offline',
      scope: ['https://www.googleapis.com/auth/userinfo.profile', 'https://www.googleapis.com/auth/userinfo.email'],
      redirect_uri: redirectUri
    });
    res.json({ url });
  });

  app.get('/auth/google/callback', async (req, res) => {
    const { code } = req.query;
    const redirectUri = `${process.env.APP_URL}/auth/google/callback`;
    try {
      const { tokens } = await client.getToken({
        code: code as string,
        redirect_uri: redirectUri
      });
      const ticket = await client.verifyIdToken({
        idToken: tokens.id_token!,
        audience: process.env.GOOGLE_CLIENT_ID
      });
      const payload = ticket.getPayload();
      if (req.session) {
        req.session.user = {
          email: payload?.email,
          name: payload?.name,
          picture: payload?.picture
        };
      }
      res.send(`
        <html>
          <body>
            <script>
              if (window.opener) {
                window.opener.postMessage({ type: 'OAUTH_AUTH_SUCCESS' }, '*');
                window.close();
              } else {
                window.location.href = '/';
              }
            </script>
          </body>
        </html>
      `);
    } catch (err) {
      console.error('OAuth error:', err);
      res.status(500).send('Authentication failed');
    }
  });

  app.get('/api/auth/me', (req, res) => {
    res.json({ user: req.session?.user || null });
  });

  app.post('/api/auth/logout', (req, res) => {
    req.session = null;
    res.json({ success: true });
  });

  // Public API Routes
  app.get('/api/guides', (req, res) => {
    const guides = db.prepare('SELECT * FROM guides WHERE is_published = 1').all();
    res.json(guides);
  });

  app.get('/api/videos', (req, res) => {
    const videos = db.prepare('SELECT * FROM videos WHERE is_published = 1').all();
    res.json(videos);
  });

  app.get('/api/guestbook', (req, res) => {
    const entries = db.prepare('SELECT * FROM guestbook WHERE approved = 1 ORDER BY created_at DESC').all();
    res.json(entries);
  });

  app.post('/api/guestbook', (req, res) => {
    const { name, location, quote } = req.body;
    if (!name || !location || !quote) return res.status(400).json({ error: 'Missing fields' });
    if (quote.length < 15) return res.status(400).json({ error: 'Message too short' });
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
    const ip = req.ip || req.headers['x-forwarded-for'] || 'unknown';
    try {
      const existing = db.prepare('SELECT 1 FROM votes_tracking WHERE topic_id = ? AND ip_address = ?').get(id, ip);
      if (existing) return res.status(400).json({ error: 'Already voted for this topic' });
      const transaction = db.transaction(() => {
        db.prepare('INSERT INTO votes_tracking (topic_id, ip_address) VALUES (?, ?)').run(id, ip);
        db.prepare('UPDATE topics SET votes = votes + 1 WHERE id = ?').run(id);
      });
      transaction();
      res.json({ success: true });
    } catch (err) {
      res.status(500).json({ error: 'Failed to record vote' });
    }
  });

  // Admin API Routes (Removed)

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

  // Seed Data if empty
  const seedData = () => {
    const guidesCount = db.prepare('SELECT COUNT(*) as count FROM guides').get().count;
    if (guidesCount === 0) {
      const guides = [
        {
          id: "drug-development",
          title: "The Drug Development Lifecycle",
          category: "Drug Development",
          description: "A detailed journey through the drug development lifecycle.",
          difficulty: "Sprout",
          readTime: "10 min",
          publishedAt: "2024-01-01",
          content: `
            <div class="prose prose-invert max-w-none">
              <h2 class="text-4xl font-serif font-bold text-amber-primary mb-8 italic">The Drug Development Lifecycle</h2>
              <p class="text-xl mb-8">Drug development is the most complex manufacturing process on Earth. It is the art and science of transforming a biological hypothesis into a stable, safe, and effective medicine.</p>
              <div class="grid md:grid-cols-2 gap-8 my-12">
                <div class="p-8 bg-surface border border-border rounded-3xl">
                  <h3 class="text-2xl font-bold mb-4">The Discovery Phase</h3>
                  <p>It starts with a kernel of an idea. Scientists identify a target in the body and search for a molecule that can interact with it.</p>
                </div>
                <div class="p-8 bg-surface border border-border rounded-3xl">
                  <h3 class="text-2xl font-bold mb-4">The CMC Pillar</h3>
                  <p>Chemistry, Manufacturing, and Controls ensure that every batch is identical and high quality.</p>
                </div>
              </div>
            </div>
          `
        },
        {
          id: "pq-cmc-deep-dive",
          title: "PQ/CMC Deep Dive",
          category: "Quality",
          description: "An in-depth look at Pharmaceutical Quality / Chemistry, Manufacturing & Controls.",
          difficulty: "Fully Popped",
          readTime: "15 min",
          publishedAt: "2024-01-02",
          content: `
            <div class="prose prose-invert max-w-none">
              <h2 class="text-4xl font-serif font-bold text-amber-primary mb-8 italic">PQ/CMC Deep Dive</h2>
              <p class="text-xl mb-8">Pharmaceutical Quality / Chemistry, Manufacturing & Controls is the backbone of regulatory submissions.</p>
              <div class="p-8 bg-surface border border-border rounded-3xl my-12">
                <h3 class="text-2xl font-bold mb-4 text-amber-primary">eCTD Module 3</h3>
                <p>This module contains all the technical data about the drug substance and drug product.</p>
              </div>
            </div>
          `
        }
      ];

      const stmt = db.prepare(`
        INSERT INTO guides (id, title, category, description, difficulty, readTime, publishedAt, content, is_published)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, 1)
      `);
      guides.forEach(g => stmt.run(g.id, g.title, g.category, g.description, g.difficulty, g.readTime, g.publishedAt, g.content));
    }

    const videosCount = db.prepare('SELECT COUNT(*) as count FROM videos').get().count;
    if (videosCount === 0) {
      const videos = [
        {
          id: "NPdbEZ3nFDY",
          title: "The Drug Development Lifecycle",
          url: "https://youtu.be/9Z_BOBK2Ytc",
          thumbnail: "https://img.youtube.com/vi/9Z_BOBK2Ytc/maxresdefault.jpg",
          description: "A high-level overview of the drug development lifecycle.",
          category: "Drug Development",
          publishedAt: "2024-01-01"
        },
        {
          id: "5zIQfWeDpHs",
          title: "PQ/CMC Deep Dive",
          url: "https://youtu.be/5zIQfWeDpHs",
          thumbnail: "https://img.youtube.com/vi/5zIQfWeDpHs/maxresdefault.jpg",
          description: "Understanding Pharmaceutical Quality and CMC.",
          category: "Quality",
          publishedAt: "2024-01-02"
        },
        {
          id: "9Z_BOBK2Ytc",
          title: "ISA 88 and ISA 95 - Rules Behind Every Pill",
          url: "https://youtu.be/9Z_BOBK2Ytc",
          thumbnail: "https://img.youtube.com/vi/9Z_BOBK2Ytc/maxresdefault.jpg",
          description: "The standards that bridge the gap between business and the factory floor.",
          category: "Standards",
          publishedAt: "2024-01-03"
        }
      ];

      const stmt = db.prepare(`
        INSERT INTO videos (id, title, url, thumbnail, description, category, publishedAt, is_published)
        VALUES (?, ?, ?, ?, ?, ?, ?, 1)
      `);
      videos.forEach(v => stmt.run(v.id, v.title, v.url, v.thumbnail, v.description, v.category, v.publishedAt));
    }
  };

  seedData();

  const PORT = 3000;
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
