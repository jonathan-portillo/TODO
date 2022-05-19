exports.up = function (knex) {
  return knex.schema
    .createTable("users", (tbl) => {
      tbl.increments();
      tbl.string("username", 128).notNullable().unique().index();
      tbl.string("password", 129).notNullable().index();
    })
    .createTable("todo_title", (tbl) => {
      tbl.increments();
      tbl.string("todo_title", 128).notNullable();
      tbl
        .integer("user_id")
        .references("users.id")
        .notNullable()
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("todo_list", (tbl) => {
      tbl.integer();
      tbl
        .string("todo_list", 300)
        .references("todo_title.id")
        .notNullable()
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("description", (tbl) => {
      tbl.integer();
      tbl
        .string("description", 2000)
        .notNullable()
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("users")
    .dropTableIfExists("todo_title")
    .dropTableIfExists("todo_list")
    .dropTableIfExists("description");
};
