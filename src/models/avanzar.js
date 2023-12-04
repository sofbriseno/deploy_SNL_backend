'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Avanzar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Carta, {
        foreignKey: 'id_carta',
      });
    }
  }
  Avanzar.init({
    id_carta: DataTypes.INTEGER,
    redireccion: DataTypes.INTEGER,
    descripcion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Avanzar',
  });
  return Avanzar;
};