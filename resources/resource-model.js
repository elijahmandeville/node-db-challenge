const db = require("../data/config");

function get() {
  return db("resources");
}

function getResources(id) {
  return db("resources as r")
    .select(["r.id", "r.name", "r.description"])
    .leftJoin("projects as p", "p.id", "rp.project_id")
    .leftJoin("resource_project as rp", "r.id", "rp.resource_id")
    .where("p.id", id);
}

function addResource(resource) {
  return db("resources")
    .insert(resource)
    .then((res) => {
      return getResources(res[0]);
    });
}

module.exports = {
  getResources,
  addResource,
  get,
};
