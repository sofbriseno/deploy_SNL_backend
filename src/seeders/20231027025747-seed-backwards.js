module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Retroceders', [
    {
      id_carta: 6,
      redireccion: 2,
      descripcion: 'Esta tarjeta te obliga a retroceder 2 casillas en el tablero. ¡Ten cuidado, no te quedes atrás!',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id_carta: 7,
      redireccion: 1,
      descripcion: '¡Retorno Inesperado! Esta tarjeta te obliga a retroceder una casilla en el tablero. ¡Vuelve un paso atrás, pero mantén tu determinación!',
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ]),
  down: (queryInterface) => queryInterface.bulkDelete('Retroceders', null, {}),
};
