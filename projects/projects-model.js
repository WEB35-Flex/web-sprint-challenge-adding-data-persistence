const db = require("../data/db-config");

module.exports = {
  getProjects,
  addProject,
  getResources,
  addResource,
  getTasks,
  addTask,
};

function getProjects() {
  return db("Projects");
}

function addProject(project) {
  return db("Projects").insert(project);
}

function getResources() {
  return db("Resources");
}

function addResource(resource) {
  return db("Resources").insert(resource);
}

function getTasks(project_id) {
  return db("Tasks as t")
    .join("Projects as p", "p.id", "t.project_id")
    .select(
      "p.project_name",
      "p.description",
      "t.description",
      "t.notes",
      "t.completed"
    )
    .where("t.project_id", project_id);
}

function addTask(task) {
  return db("Tasks").insert(task);
}
