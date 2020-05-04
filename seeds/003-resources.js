exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("resources").insert([
        {
          name: "Lawn mower",
          description: "it mows your lawn, what else do you think I'd say?",
        },
        {
          name: "Microwave",
          description:
            "You don't have the skill to operate anything other than a microwave",
        },
        { name: "Your brain", description: "Forex trading" },
      ]);
    });
};
