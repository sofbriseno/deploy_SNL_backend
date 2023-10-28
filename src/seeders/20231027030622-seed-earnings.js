module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Ingresos', [
    {
      id_carta: 3,
      monto: 100,
      descripcion: 'Esta carta te otorga $100. ¡Puedes usarlos para comprar lo que quieras!',
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ]),
  down: (queryInterface) => queryInterface.bulkDelete('Ingresos', null, {}),
};
