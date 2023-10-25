// import Router from "koa-router";
const Router = require('koa-router');
// import users from "./routes/users.js";
const users = require('./routes/users.js')

const router = new Router();

router.use("/users", users.routes());

module.exports = router;