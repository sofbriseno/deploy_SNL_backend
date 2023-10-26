const Router = require('koa-router');

const router = new Router();

const users = [
    {
        "user": "Nico",
        "pass": "Bananatech"
    },
    {
        "user": "Laura",
        "pass": "12345678"
    },
    {
        "user": "Sofia",
        "pass": "12345678"
    }
]

router.get("users.show", "/show", async(ctx) =>{
    ctx.body = users;
})

module.exports = router;