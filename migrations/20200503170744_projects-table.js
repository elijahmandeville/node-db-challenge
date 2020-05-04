exports.up = async function (knex) {
  await knex.schema.createTable("projects", (table) => {
    table.increments("id");
    table.text("name").notNull();
    table.text("description");
    table.boolean("is_completed").notNull().defaultTo("false");
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("projects");
};
