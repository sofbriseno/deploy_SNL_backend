const Router = require('koa-router');

const router = new Router();

// C
router.post("card.create", "/create", async (ctx) => {
    try {
        const card = await ctx.orm.Carta.create(ctx.request.body);
        ctx.body = card;
        ctx.status = 201;
    } catch (error) {
        ctx.body = error;
        ctx.status = 400;
    }
})

// R
// Lisa de cartas
router.get("card.getCards","/",async(ctx)=>{
    try{
        const cards = await ctx.orm.Carta.findAll({
            attributes: ['id', 'tipo'],
            include: [
                {
                    model: ctx.orm.Avanzar
                }
            ]
        });
        console.log(cards);
        ctx.body = cards;
        ctx.status = 200;
    } catch(error){
        ctx.body = error;
        ctx.status = 400;
    }
})
// Información de carta específica por ID
router.get("card.info", "/:id", async(ctx) => {
    try {
        const card = await ctx.orm.Cartas.findByPk(ctx.params.id);
    } catch(error) {
        ctx.body = cards;
        ctx.status = 400;
        return;
    }
    if (!card) {
        ctx.body = `The card by the ID '${id}' does not exist`;
    }
})

// U

// D

module.exports = router;