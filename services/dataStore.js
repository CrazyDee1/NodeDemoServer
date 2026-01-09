const fs = require("fs");
const path = require("path");
const sqlite3 = require("sqlite3").verbose();
const trackSeed = require("../data/tracks");

const dataDir = path.join(__dirname, "..", "data");
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const dbPath = path.join(dataDir, "app.db");
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error("Failed to open database", err);
  }
});

const schema = () => {
  db.serialize(() => {
    db.run(
      `CREATE TABLE IF NOT EXISTS tracks (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        artist TEXT NOT NULL,
        title TEXT NOT NULL,
        album TEXT NOT NULL,
        year INTEGER NOT NULL,
        genre TEXT NOT NULL
      )`
    );

    db.run(
      `CREATE TABLE IF NOT EXISTS posts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        body TEXT,
        author TEXT,
        created_at TEXT DEFAULT CURRENT_TIMESTAMP
      )`
    );

    db.run(
      `CREATE TABLE IF NOT EXISTS projects (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        description TEXT,
        status TEXT,
        start_date TEXT,
        end_date TEXT
      )`
    );

    seedTracks();
  });
};

const seedTracks = () => {
  db.get("SELECT COUNT(*) AS count FROM tracks", (err, row) => {
    if (err) {
      console.error("failed to count tracks", err);
      return;
    }

    if (row?.count > 0) {
      return;
    }

    const insert = db.prepare(
      "INSERT INTO tracks (artist, title, album, year, genre) VALUES (?, ?, ?, ?, ?)"
    );

    trackSeed.forEach((track) => {
      insert.run([
        track.artist,
        track.title,
        track.album,
        track.year,
        track.genre
      ]);
    });

    insert.finalize();
  });
};

const runQuery = (sql, params = []) =>
  new Promise((resolve, reject) => {
    db.run(sql, params, function (err) {
      if (err) {
        return reject(err);
      }
      resolve({ lastID: this.lastID, changes: this.changes });
    });
  });

const getQuery = (sql, params = []) =>
  new Promise((resolve, reject) => {
    db.get(sql, params, (err, row) => {
      if (err) {
        return reject(err);
      }
      resolve(row);
    });
  });

const allQuery = (sql, params = []) =>
  new Promise((resolve, reject) => {
    db.all(sql, params, (err, rows) => {
      if (err) {
        return reject(err);
      }
      resolve(rows);
    });
  });

const trackService = {
  createTrack: (track) =>
    runQuery(
      "INSERT INTO tracks (artist, title, album, year, genre) VALUES (?, ?, ?, ?, ?)",
      [track.artist, track.title, track.album, track.year, track.genre]
    ),
  getTrackById: (id) => getQuery("SELECT * FROM tracks WHERE id = ?", [id]),
  getTracks: () => allQuery("SELECT * FROM tracks ORDER BY id"),
  getRandomTracks: (count = 8) =>
    allQuery("SELECT * FROM tracks ORDER BY RANDOM() LIMIT ?", [count]),
  updateTrack: (id, track) =>
    runQuery(
      "UPDATE tracks SET artist = ?, title = ?, album = ?, year = ?, genre = ? WHERE id = ?",
      [track.artist, track.title, track.album, track.year, track.genre, id]
    ),
  deleteTrack: (id) => runQuery("DELETE FROM tracks WHERE id = ?", [id])
};

const postService = {
  createPost: (post) =>
    runQuery(
      "INSERT INTO posts (title, body, author, created_at) VALUES (?, ?, ?, ?)",
      [
        post.title,
        post.body,
        post.author,
        post.created_at || new Date().toISOString()
      ]
    ),
  getPostById: (id) => getQuery("SELECT * FROM posts WHERE id = ?", [id]),
  getPosts: () => allQuery("SELECT * FROM posts ORDER BY id DESC"),
  updatePost: (id, post) =>
    runQuery(
      "UPDATE posts SET title = ?, body = ?, author = ?, created_at = ? WHERE id = ?",
      [
        post.title,
        post.body,
        post.author,
        post.created_at || new Date().toISOString(),
        id
      ]
    ),
  deletePost: (id) => runQuery("DELETE FROM posts WHERE id = ?", [id])
};

const projectService = {
  createProject: (project) =>
    runQuery(
      "INSERT INTO projects (name, description, status, start_date, end_date) VALUES (?, ?, ?, ?, ?)",
      [
        project.name,
        project.description,
        project.status,
        project.start_date,
        project.end_date
      ]
    ),
  getProjectById: (id) => getQuery("SELECT * FROM projects WHERE id = ?", [id]),
  getProjects: () => allQuery("SELECT * FROM projects ORDER BY id DESC"),
  updateProject: (id, project) =>
    runQuery(
      "UPDATE projects SET name = ?, description = ?, status = ?, start_date = ?, end_date = ? WHERE id = ?",
      [
        project.name,
        project.description,
        project.status,
        project.start_date,
        project.end_date,
        id
      ]
    ),
  deleteProject: (id) => runQuery("DELETE FROM projects WHERE id = ?", [id])
};

schema();

module.exports = {
  trackService,
  postService,
  projectService
};
