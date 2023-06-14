'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Makanan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Makanan.init({
    nama: DataTypes.STRING,
    karbohidrat: DataTypes.INTEGER,
    protein: DataTypes.INTEGER,
    lemak: DataTypes.INTEGER,
    karbon: DataTypes.INTEGER,
    kalori: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Makanan',
  });
  return Makanan;
};