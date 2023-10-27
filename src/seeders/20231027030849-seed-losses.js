module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Perdidas', [
    {
      id_carta: 4,
      monto: 50,
      descripcion: "Esta carta te obliga a pagar 50 pesos. ¡Ten cuidado, no quedes en bancarrota!",
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ]),
  down: (queryInterface) => queryInterface.bulkDelete('Perdidas', null, {}),
};
