'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Artikel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Artikel.init({
    judul: DataTypes.STRING,
    tanggal: DataTypes.DATE,
    image: DataTypes.STRING,
    konten: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Artikel',
  });
  return Artikel;
};