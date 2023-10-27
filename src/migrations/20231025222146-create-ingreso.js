'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Ingresos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_carta: {
        references: { model: 'Cartas', key: 'id' },
        unique: true,
        type: Sequelize.INTEGER,
        
      },
      monto: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      descripcion: {
        type: Sequelize.STRING,
        allowNull: false,
        
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
    await queryInterface.dropTable('Ingresos');
  }
};