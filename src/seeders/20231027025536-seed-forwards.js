module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Avanzars', [
    {
      id_carta: 1,
      redireccion: 2,
      descripcion: '¡Doble salto! Esta tarjeta te permite avanza dos casilla.',
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ]),
  down: (queryInterface) => queryInterface.bulkDelete('Avanzars', null, {}),
};
