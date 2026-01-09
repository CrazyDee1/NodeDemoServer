const express = require("express");
const path = require("path");
require("dotenv").config({ path: ".env.local" });
const { trackService, postService, projectService } = require("./services/dataStore");

const app = express();
app.use(express.json());

const corsOrigin = process.env.API_URL || "*";
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", corsOrigin);
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }
  next();
});

app.use("/static", express.static(path.join(__dirname, "static")));

const apiRouter = express.Router();

apiRouter.get("/tracks", async (req, res) => {
  try {
    const tracks = await trackService.getRandomTracks(8);
    res.json(tracks);
  } catch (error) {
    console.error("Failed to load tracks", error);
    res.status(500).json({ error: "Failed to load tracks" });
  }
});

apiRouter.get("/posts", async (req, res) => {
  try {
    const posts = await postService.getPosts();
    res.json(posts);
  } catch (error) {
    console.error("Failed to load posts", error);
    res.status(500).json({ error: "Failed to load posts" });
  }
});

apiRouter.get("/projects", async (req, res) => {
  try {
    const projects = await projectService.getProjects();
    res.json(projects);
  } catch (error) {
    console.error("Failed to load projects", error);
    res.status(500).json({ error: "Failed to load projects" });
  }
});

app.use("/api", apiRouter);

app.get("/", (req, res) => {
  res.send("Welcome to the Express API");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Express server listening on http://localhost:${PORT}`);
});
 