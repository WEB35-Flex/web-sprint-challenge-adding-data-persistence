exports.up = function (knex) {
  return knex.schema
    .createTable("Projects", (tbl) => {
      tbl.increments();
      tbl.string("project_name", 128).notNullable().unique();
      tbl.string("description", 128);
      tbl.boolean("completed").defaultTo(false).notNullable();
    })
    .createTable("Resources", (tbl) => {
      tbl.increments();
      tbl.string("resource_name").notNullable().unique();
      tbl.string("description", 128);
    })
    .createTable("Tasks", (tbl) => {
      tbl.increments();
      tbl.string("description", 128).notNullable();
      tbl.string("notes", 128);
      tbl.boolean("completed").defaultTo(false).notNullable();
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("Projects");
    })
    .createTable("ProjectResources", (tbl) => {
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("Projects");
      tbl
        .integer("resource_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("Resources");
      tbl.primary(["project_id", "resource_id"]);
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("ProjectResources")
    .dropTableIfExists("Tasks")
    .dropTableIfExists("Resources")
    .dropTableIfExists("Projects");
};
