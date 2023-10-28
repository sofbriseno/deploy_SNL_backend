'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Juegas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_partida: {
        references: { model: 'Partidas', key: 'id' },
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      id_jugador: {
        references: { model: 'Jugadors', key: 'id' },
        allowNull: false,
        unique: true,
        type: Sequelize.INTEGER,
      },
      num: {
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
    await queryInterface.dropTable('Juegas');
  }
};