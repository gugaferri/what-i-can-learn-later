"use strict";

const Schema = use("Schema");

class ContentSchema extends Schema {
  up() {
    this.create("contents", table => {
      table.increments();
      table
        .integer("group_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("groups")
        .onDelete("CASCADE");
      table.string("name", 255).notNullable();
      table.string("url", 255).nullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("contents");
  }
}

module.exports = ContentSchema;
