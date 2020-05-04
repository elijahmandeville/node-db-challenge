const express = require("express");

const projectsDb = require("./projects-model");
const tasksRouter = require("../tasks/tasks-router");

const router = express.Router({
  mergeParams: true,
});

router.get("/", async (req, res, next) => {
  try {
    const projects = await projectsDb.getProjects();

    if (!projects) {
      res.status(404).json({
        message: "Could not retrieve projects",
      });
    }
    res.status(200).json(projects);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", validateProjectId, async (req, res, next) => {
  try {
    res.status(200).json(req.project);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  const { name, description, is_completed } = req.body;

  try {
    const payload = {
      name,
      description,
      is_completed,
    };

    const newProject = await projectsDb.addProject(payload);
    res.json(newProject);
  } catch (err) {
    next(err);
  }
});

async function validateProjectId(req, res, next) {
  try {
    const project = await projectsDb.getProjectById(req.params.id);

    req.project = project;
    req.id = req.params.id;

    if (!project) {
      res.status(400).json({
        message: "Could not find project by that ID",
      });
    }
    next();
  } catch (err) {
    next(err);
  }
}

module.exports = router;
