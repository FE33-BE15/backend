"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    // static associate(models) {
    // }
  }
  users.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      age: DataTypes.INTEGER,
      weight: DataTypes.FLOAT,
      height: DataTypes.FLOAT,
      activity: DataTypes.STRING,
      password: DataTypes.STRING,
      gender: {
        type: DataTypes.ENUM("Laki-Laki", "Perempuan", "Lainnya"),
        allowNull: false,
      },
      calori: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "users",
    }
  );
  return users;
};
