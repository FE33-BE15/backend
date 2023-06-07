"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    static associate(models) {
      // Relasi
      users.belongsTo(models.roles, { foreignKey: "roleId" });
    }
  }
  users.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      age: DataTypes.INTEGER,
      weight: DataTypes.DECIMAL(5, 2),
      height: DataTypes.DECIMAL(5, 2),
      gender: DataTypes.STRING,
      activity: DataTypes.STRING,
      roleId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "users",
    }
  );
  return users;
};
