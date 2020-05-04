exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("resource_project")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("resource_project").insert([
        { resource_id: 1, project_id: 1 },
        { resource_id: 2, project_id: 2 },
        { resource_id: 3, project_id: 3 },
      ]);
    });
};
