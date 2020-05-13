"use strict";

const Model = use("Model");

class User extends Model {
  tokens() {
    return this.hasMany("App/Models/Token");
  }
}

module.exports = User;
