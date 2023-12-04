const bcrypt = require('bcrypt');

const saltRounds = 10;

const hashPassword1 = bcrypt.hashSync('@sofia123', saltRounds);
const hashPassword2 = bcrypt.hashSync('@laura123', saltRounds);
const hashPassword3 = bcrypt.hashSync('@nicolas123', saltRounds);
const hashPassword4 = bcrypt.hashSync('@juanita123', saltRounds);

module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Usuarios', [
    {
      nombre: 'sofiabriseno',
      contrasena: hashPassword1,
      mail: 'sofia.briseno@uc.cl',
      ranking: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nombre: 'lauracid',
      contrasena: hashPassword2,
      mail: 'laura.cid@uc.cl',
      ranking: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nombre: 'nicolasgutierrez',
      contrasena: hashPassword3,
      mail: 'njgutierrez@uc.cl',
      ranking: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nombre: 'juanitaperez',
      contrasena: hashPassword4,
      mail: 'juanita@gmail.com',
      ranking: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]),
  down: (queryInterface) => queryInterface.bulkDelete('Usuarios', null, {}),
};
