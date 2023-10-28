'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Jugador extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Usuario, {
        foreignKey: 'id_usuario',
      });
      this.belongsTo(models.Partida, {
        foreignKey: 'id_partida',
      });
      this.belongsTo(models.Casilla, {
        foreignKey: 'id_casilla',
      });
      this.hasOne(models.Juega, {
        foreignKey: 'id',
      });
    }
  }
  Jugador.init({
    id_usuario: DataTypes.INTEGER,
    id_partida: DataTypes.INTEGER,
    personaje: {
      type: DataTypes.INTEGER,
      validate: {
        min: 1,
        max: 4
      }
    },
    id_casilla: DataTypes.INTEGER,
    dinero: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0
      }
    }
  }, {
    sequelize,
    modelName: 'Jugador',
  });
  return Jugador;
};