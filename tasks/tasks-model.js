const db = require("../data/config");

function getTasks(id) {
  return db("projects as p")
    .join("tasks as t", "p.id", "t.project_id")
    .select([
      "t.description",
      "t.notes",
      "t.is_completed",
      "t.project_id",
      "p.name",
      "p.description",
    ])
    .where("t.project_id", id);
}

function addTask(task, id) {
  const { description, notes, is_completed } = task;
  return db("tasks")
    .insert({ description, notes, is_completed, project_id: id })
    .where("id", id)
    .then((res) => {
      return getTasks(res[0]);
    });
}

module.exports = {
  getTasks,
  addTask,
};
