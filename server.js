const express = require("express");

const resourceDb = require("./resources/resource-model");

const projectsRouter = require("./projects/projects-router");
const tasksRouter = require("./tasks/tasks-router");
const resourceRouter = require("./resources/resource-router");

const server = express();

server.use(express.json());

server.use("/projects", projectsRouter);
server.use("/projects", tasksRouter);
server.use("/projects", resourceRouter);

server.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    message: "something went wrong",
  });
});

server.get("/", (req, res) => {
  res.json({
    message: "Welcome",
  });
});

server.get("/resources", async (req, res, next) => {
  try {
    const resources = await resourceDb.get();
    res.json(resources);
  } catch (err) {
    next(err);
  }
});

module.exports = server;
