exports.up = async function (knex) {
  await knex.schema.createTable("resource_project", (tbl) => {
    tbl
      .integer("resource_id")
      .notNull()
      .unsigned()
      .references("id")
      .inTable("resources");
    tbl
      .integer("project_id")
      .notNull()
      .unsigned()
      .references("id")
      .inTable("projects");
    tbl.primary(["project_id", "resource_id"]);
  });
};
exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("resource_project");
};
