exports.up = async function (knex) {
  await knex.schema.createTable("tasks", (table) => {
    table.increments("id");
    table.text("description").notNull();
    table.text("notes");
    table.boolean("is_completed").notNull().defaultTo("false");
    table
      .integer("project_id")
      .notNull()
      .unsigned()
      .references("id")
      .inTable("projects")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("tasks");
};
