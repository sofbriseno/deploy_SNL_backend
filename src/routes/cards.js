const Router = require('koa-router');

const router = new Router();


router.post("card.create", "/", async (ctx) => {
    try {
        const card = await ctx.orm.Carta.create({
            tipo: ctx.request.body.tipo,
        });
        ctx.body = card;
        ctx.status = 201;
    } catch (error) {
        ctx.body = error;
        ctx.status = 400;
    }
})

// Lisa de cartas
router.get("card.getCards","/",async(ctx)=>{
    try{
        const cards = await ctx.orm.Carta.findAll();
        ctx.body = cards;
        ctx.status = 200;
    } catch(error){
        ctx.body = error;
        ctx.status = 400;
    }
})
// Información de carta específica por ID
router.get("card.info", "/:id", async(ctx) => {
    let card;
    try {
        card = await ctx.orm.Carta.findByPk(ctx.params.id);
    } catch(error) {
        ctx.body = error;
        ctx.status = 400;
        return;
    }
    if (!card) {
        ctx.body = `La carta con ID '${ctx.params.id}' no existe.`;
        ctx.status = 404;
        return
    }
    try {
        ctx.body = card;
        ctx.status = 200;
    } catch (error) {
        ctx.body = error;
        ctx.status = 400;
    }

})

router.put("card.update", "/:id", async(ctx) => {
    const cardID = ctx.params.id;
    let card;
    try {
        card = await ctx.orm.Carta.findByPk(cardID);
    } catch (error) {
        ctx.body = error;
        ctx.status = 400;
        return;
    }
    if (!card) {
        ctx.body = `No pudimos encontrar una carta con ID = '${cardID}'.`;
        ctx.status = 404;
        return;
    }
    try{
        await card.update(ctx.request.body);
        ctx.body = card;
        ctx.status = 202;
    } catch (error) {
        ctx.body = `No se pudo actualizar la carta con ID = '${cardID}'.`;
        ctx.status = 400;
    }
})

router.delete("card.delete", "/:id", async(ctx) => {
    let card;
    const cardID = ctx.params.id;
    try {
        card = await ctx.orm.Carta.findByPk(cardID);
    } catch (error) {
        ctx.body = error;
        ctx.status = 400;
        return;
    }
    if (!card) {
        ctx.body = `No pudimos encontrar una carta con ID = '${cardID}'.`;
        ctx.status = 404;
        return;
    }
    try{
        await card.destroy();
        ctx.body = `La carta, con ID = '${cardID}', fue eliminada con éxito!`;
        ctx.status = 204;
    } catch (error) {
        ctx.body = `No se pudo eliminar la carta con ID = '${cardID}'.`;
        ctx.status = 400;
    }
})

module.exports = router;