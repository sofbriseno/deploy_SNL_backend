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
        foreignKey: 'id_casilla',
      });
      this.hasMany(models.Escalera, {
        foreignKey: 'id_nueva_casilla',
      });
      this.hasOne(models.Serpiente, {
        foreignKey: 'id_casilla',
      });
      this.hasMany(models.Serpiente, {
        foreignKey: 'id_nueva_casilla',
      });
      this.hasMany(models.Jugador, {
        foreignKey: 'id_casilla',
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
          if (!value.match(/[Normal|Escalera|Serpiente]+/)) {
            throw new Error('La casilla pude ser unicamente de tipo "Normal", "Escalera" o "Serpiente".')
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