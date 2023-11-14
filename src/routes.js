const Router = require('koa-router');
const characters = require('./routes/characters.js');
const users = require('./routes/users.js');
const games = require('./routes/games.js');
const authentication = require('./routes/authentication.js');
const dotenv = require('dotenv');
const jwtMiddleware = require('koa-jwt');
const scopeProtectedRoutes = require('./routes/scope.js');
const cards = require('./routes/cards.js');

dotenv.config();

const router = new Router();

router.use("/characters", characters.routes());
router.use("/games", games.routes());
router.use("/authentication", authentication.routes());
router.use("/cards", cards.routes());


// Desde esta línea, todas las rutas requeriran un JWT. Esto na aplica para
// las líneas anteriores
router.use(jwtMiddleware( { secret: process.env. JWT_SECRET } ))
router.use("/users", users.routes());
router.use("/scope", scopeProtectedRoutes.routes())

module.exports = router;