'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Casilla extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.Escalera, {
        foreignKey: 'id',
      });
      this.hasOne(models.Tobogan, {
        foreignKey: 'id',
      });
      this.hasMany(models.Jugador, {
        foreignKey: 'id',
      });
    }
  }
  Casilla.init({
    posicion_v: DataTypes.INTEGER,
    posicion_h: DataTypes.INTEGER,
    tipo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Casilla',
  });
  return Casilla;
};