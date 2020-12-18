'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Snacks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Snacks.init({
    title: DataTypes.STRING,
    category: DataTypes.STRING,
    healthiness: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Snacks',
  });
  return Snacks;
};