"use strict";

const Model = use("Model");

class Group extends Model {
  user() {
    return this.belongsTo("App/Models/User");
  }
}

module.exports = Group;
