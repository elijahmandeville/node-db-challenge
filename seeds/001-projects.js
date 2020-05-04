exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("projects").insert([
        { name: "Mow lawn", description: "Mow the lawn", is_completed: false },
        {
          name: "Cook food",
          description: "Cook some food",
          is_completed: true,
        },
        {
          name: "Get that bread",
          description: "Rake in that dough",
          is_completed: true,
        },
      ]);
    });
};
