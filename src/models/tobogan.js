'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tobogan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Casilla, {
        foreignKey: 'id_casilla',
      });
      this.belongsTo(models.Casilla, {
        foreignKey: 'id_nueva_casilla',
      });
    }
  }
  Tobogan.init({
    id_casilla: DataTypes.INTEGER,
    id_nueva_casilla: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Tobogan',
  });
  return Tobogan;
};