module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Partidas', [
    {
      estado: true,
      turno_actual: 1,
      num_jugadores: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ]),
  down: (queryInterface) => queryInterface.bulkDelete('Partidas', null, {}),
};
