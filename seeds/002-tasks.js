exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          description: "Mow your lawn",
          notes: "make sure to use a lawn mower",
          is_completed: false,
          project_id: 1,
        },
        {
          description: "Cook some food for yourself",
          notes: "watch out for food poisoning",
          is_completed: true,
          project_id: 2,
        },
        {
          description: "Make bread",
          notes: "Make that dough for your family",
          is_completed: true,
          project_id: 3,
        },
      ]);
    });
};
