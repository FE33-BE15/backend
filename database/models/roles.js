"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class roles extends Model {
    static associate(models) {
      // Relasi
      roles.hasMany(models.users, { foreignKey: "roleId" });
    }
  }
  roles.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "roles",
    }
  );
  return roles;
};
