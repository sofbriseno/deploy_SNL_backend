'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Jugador, {
        foreignKey: 'id_usuario',
      });
    }
  }
  Usuario.init({
    nombre: {
      type: DataTypes.STRING,
      validate: {
        isAlphanumeric: {
          msg: 'Usario debe ser alfanumérico'
        }
      },
    },
    contrasena: {
      type: DataTypes.STRING,
      validate: {
        isValidPassword(value) {
          if (!value.match(/[a-z]/) || !value.match(/[0-9]/) || !value.match(/[@$!%*?&]/)) {
            throw new Error('La contraseña debe contener por lo menos una letra, un número y un caracter especial')
          }
        }
      }
    },
    mail: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          msg: 'Mail debe tener formato de correo electrónico'
        }
      },
    },
    ranking: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};