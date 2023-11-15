const Router = require('koa-router');
const characters = require('./routes/characters.js');
const users = require('./routes/users.js');
const games = require('./routes/games.js');
const authentication = require('./routes/authentication.js');
const dotenv = require('dotenv');
const jwtMiddleware = require('koa-jwt');
const scopeProtectedRoutes = require('./routes/scope.js');
const cards = require('./routes/cards.js');
const forwards = require('./routes/forwards.js');
const backwards = require('./routes/backwards.js');
const earnings = require('./routes/earnings.js');
const losses = require('./routes/losses.js');
const spaces = require('./routes/spaces.js');
const ladders = require('./routes/ladders.js');
const snakes = require('./routes/snakes.js');
const players = require('./routes/players.js');

dotenv.config();

const router = new Router();

router.use("/characters", characters.routes());
router.use("/games", games.routes());
router.use("/authentication", authentication.routes());
router.use("/cards", cards.routes());
router.use("/forwards", forwards.routes());
router.use("/backwards", backwards.routes());
router.use("/earnings", earnings.routes());
router.use("/losses", losses.routes());
router.use("/spaces", spaces.routes());
router.use("/ladders", ladders.routes());
router.use("/snakes", snakes.routes());
router.use("/players", players.routes());

// Desde esta línea, todas las rutas requeriran un JWT. Esto na aplica para
// las líneas anteriores
router.use(jwtMiddleware( { secret: process.env. JWT_SECRET } ))
router.use("/users", users.routes());
router.use("/scope", scopeProtectedRoutes.routes())

module.exports = router;