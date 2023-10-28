const Router = require('koa-router');
const characters = require('./routes/characters.js');
const users = require('./routes/users.js');
const games = require('./routes/games.js');

const router = new Router();

router.use("/characters", characters.routes());
router.use("/users", users.routes());
router.use("/games", games.routes());

module.exports = router;