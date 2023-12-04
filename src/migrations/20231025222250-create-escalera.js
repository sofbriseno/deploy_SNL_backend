'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Escaleras', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_casilla: {
        references: { model: 'Casillas', key: 'id' },
        unique: true,
        type: Sequelize.INTEGER,
        
      },
      id_nueva_casilla: {
        references: { model: 'Casillas', key: 'id' },
        allowNull: false,
        type: Sequelize.INTEGER,
        
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
    await queryInterface.dropTable('Escaleras');
  }
};