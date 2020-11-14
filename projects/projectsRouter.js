const express = require("express");

const Projects = require("./projects-model");

const router = express.Router();

router.post("/resources", (req, res) => {
  const resource = req.body;

  Projects.addResource(resource)
    .then((id) => {
      res.status(201).json(id);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.post("/", (req, res) => {
  const project = req.body;

  Projects.addProject(project)
    .then((id) => {
      res.status(201).json(id);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.post("/tasks", (req, res) => {
  const task = req.body;

  Projects.addTask(task)
    .then((id) => {
      res.status(201).json(id);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.get("/", (req, res) => {
  Projects.getProjects()
    .then((p) => {
      res.status(200).json(p);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.get("/resources", (req, res) => {
  Projects.getResources()
    .then((r) => {
      res.status(200).json({ resources: r });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.get("/:id/tasks", (req, res) => {
  const { id } = req.params;

  Projects.getTasks(id)
    .then((t) => {
      res.status(200).json({ tasks: t });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;
