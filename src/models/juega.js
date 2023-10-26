'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Juega extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Jugador, {
        foreignKey: 'id_jugador',
      });
      this.belongsTo(models.Partida, {
        foreignKey: 'id_partida',
      });
    }
  }
  Juega.init({
    id_partida: DataTypes.INTEGER,
    id_jugador: DataTypes.INTEGER,
    num: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Juega',
  });
  return Juega;
};