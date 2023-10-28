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
    posicion_v: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0,
        // max: (?)
      }
    },
    posicion_h: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0,
        // max: (?)
      }
    },
    tipo: {
      type: DataTypes.STRING,
      validate: {
        isValidType(value) {
          if (!value.match(/[Normal|Escalera|Tobogan]+/)) {
            throw new Error('La casilla pude ser unicamente de tipo "Normal", "Escalera" o "Tobogan".')
          }
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Casilla',
  });
  return Casilla;
};