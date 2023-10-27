module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Retroceders', [
    {
      id_carta: 2,
      redireccion: 2,
      descripcion: 'Esta tarjeta te obliga a retroceder 2 casillas en el tablero. ¡Ten cuidado, no te quedes atrás!',
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ]),
  down: (queryInterface) => queryInterface.bulkDelete('Retroceders', null, {}),
};
