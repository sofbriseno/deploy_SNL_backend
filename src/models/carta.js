'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Carta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.Avanzar, {
        foreignKey: 'id',
      });
      this.hasOne(models.Retroceder, {
        foreignKey: 'id',
      });
      this.hasOne(models.Ingreso, {
        foreignKey: 'id',
      });
      this.hasOne(models.Perdida, {
        foreignKey: 'id',
      });
    }
  }
  Carta.init({
    tipo: {
      type: DataTypes.STRING,
      validate: {
        isValidType(value) {
          if (!value.match(/[Avanzar|Retroceder|Ingreso|Perdida]+/)) {
            throw new Error('La casilla pude ser unicamente de tipo "Normal", "Escalera" o "Tobogan".')
          }
        }
      }
    },
    descripcion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Carta',
  });
  return Carta;
};