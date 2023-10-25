import Router from "koa-router";

const router = new Router();

const users = [
    {
        "user": "Nico",
        "pass": "Bananatech"
    },
    {
        "user": "Laura",
        "pass": "ContrasenaGenerica"
    },
    {
        "user": "Sofia",
        "pass": "GatoLopaEscalopa"
    }
]

router.get("users.show", "/show", async(ctx) =>{
    ctx.body = users;
})

export default router;