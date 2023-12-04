'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Partida extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Jugador, {
        foreignKey: 'id_partida',
      });
    }
  }
  Partida.init({
    estado: DataTypes.BOOLEAN,
    turno_actual: {
      type: DataTypes.INTEGER,
      validate: {
        isLessThanOtherField(value) {
          if( value > this.num_jugadores) {
            throw new Error('Turno actual debe ser menor o igual que el número de jugadores.');
          }
        }
      }
    },
    num_jugadores: {
      type: DataTypes.INTEGER,
      validate: {
        min: 1,
        max: 4
      }
    }
  }, {
    sequelize,
    modelName: 'Partida',
  });
  return Partida;
};