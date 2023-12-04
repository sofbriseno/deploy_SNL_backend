const Router = require('koa-router');

const router = new Router();

const characters = [
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

router.get("characters.show", "/show", async(ctx) =>{
    ctx.body = characters;
})

module.exports = router;