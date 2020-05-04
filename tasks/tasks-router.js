const express = require("express");

const tasksDb = require("./tasks-model");
const projectsDb = require("../projects/projects-model");

const router = express.Router();

router.get("/:id/tasks", validateProjectId, async (req, res, next) => {
  try {
    const taskList = await tasksDb.getTasks(req.project.id);
    if (!taskList) {
      res.status(404);
    }
    res.status(200).json(taskList);
  } catch (err) {
    next(err);
  }
});

router.post("/:id/tasks", async (req, res, next) => {
  try {
    const data = req.body;
    const newTask = await tasksDb.addTask(data, req.params.id);
    res.status(201).json(newTask);
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
        message: "Could not find task by that ID",
      });
    }
    next();
  } catch (err) {
    next(err);
  }
}

module.exports = router;
