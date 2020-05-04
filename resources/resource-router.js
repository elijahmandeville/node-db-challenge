const express = require("express");

const resourceDb = require("./resource-model");

const router = express.Router();

router.get("/:id/resources", async (req, res, next) => {
  try {
    const resources = await resourceDb.getResources(req.params.id);
    res.status(200).json(resources);
  } catch (err) {
    next(err);
  }
});

router.post("/:id/resources", async (req, res, next) => {
  const { name, description } = req.body;

  try {
    const payload = {
      name,
      description,
    };
    const newResource = await resourceDb.addResource(payload);
    res.status(200).json(newResource);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
