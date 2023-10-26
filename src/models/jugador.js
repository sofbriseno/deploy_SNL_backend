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
    personaje: DataTypes.INTEGER,
    id_casilla: DataTypes.INTEGER,
    dinero: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Jugador',
  });
  return Jugador;
};