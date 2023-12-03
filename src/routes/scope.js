const Router = require('koa-router');
const authUtils = require('../lib/auth/jwt.js');

const router = new Router();

router.get('/protecteduser', authUtils.isUser, async (ctx) => {
    ctx.body = {
        message: "Bienvenido a la ruta protegida con el scope user!",
        user: ctx.state.user
    };
    console.log("Bienvenido a la ruta protegida con el scope user!")
});

router.get('/protectedadmin', authUtils.isAdmin, async (ctx) => {
    ctx.body = {
        message: "Bienvenido a la ruta protegida con el scope admin!",
        user: ctx.state.user
    }
});

module.exports = router;