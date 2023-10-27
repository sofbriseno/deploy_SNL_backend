'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Jugadors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_usuario: {
        references: { model: 'Usuarios', key: 'id' },
        allowNull: false,
        type: Sequelize.INTEGER,
        
      },
      personaje: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      id_casilla: {
        references: { model: 'Casillas', key: 'id' },
        allowNull: false,
        type: Sequelize.INTEGER,
        
      },
      dinero: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Jugadors');
  }
};