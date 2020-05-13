"use strict";

const Schema = use("Schema");

class GroupSchema extends Schema {
  up() {
    this.create("groups", table => {
      table.increments();
      table
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onDelete("CASCADE");
      table.string("name", 240).notNullable();
      table.number("position").defaultTo(0);
      table.timestamps();
    });
  }

  down() {
    this.drop("groups");
  }
}

module.exports = GroupSchema;
