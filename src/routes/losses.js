const Router = require('koa-router');

const router = new Router();

router.post("loss.create", "/", async (ctx) => {
    try {
        const card = await ctx.orm.Perdida.create(ctx.request.body);
        ctx.body = card;
        ctx.status = 201;
    } catch (error) {
        ctx.body = error;
        ctx.status = 400;
    }
})

// Lista de cartas de tipo Perdida
router.get("loss.getCards","/",async(ctx)=>{
    try{
        const cards = await ctx.orm.Perdida.findAll();
        ctx.body = cards;
        ctx.status = 200;
    } catch(error){
        ctx.body = error;
        ctx.status = 400;
    }
})
// Información de carta de tipo Perdida específica por ID
router.get("loss.info", "/:id", async(ctx) => {
    const cardID = ctx.params.id;
    let card;
    try {
        card = await ctx.orm.Perdida.findOne({where:{id_carta:cardID}});
    } catch(error) {
        ctx.body = error;
        ctx.status = 400;
        return;
    }
    if (!card) {
        ctx.body = `La carta de tipo "Perdida" con ID '${cardID}}' no existe.`;
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

router.put("loss.update", "/:id", async(ctx) => {
    const cardID = ctx.params.id;
    let card;
    try {
        card = await ctx.orm.Perdida.findOne({where:{id_carta:cardID}});
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

router.delete("loss.delete", "/:id", async(ctx) => {
    let card;
    const cardID = ctx.params.id;
    try {
        card = await ctx.orm.Perdida.findOne({where:{id_carta:cardID}});
    } catch (error) {
        ctx.body = error;
        ctx.status = 400;
        return;
    }
    if (!card) {
        ctx.body = `No pudimos encontrar una carta de tipo Perdida con ID = '${cardID}'.`;
        ctx.status = 404;
        return;
    }
    try{
        await card.destroy();
        ctx.body = `La carta, con ID = '${cardID}', fue eliminada con éxito!`;
        ctx.status = 204;
    } catch (error) {
        ctx.body = `No se pudo eliminar la carta de tipo Perdidacon ID = '${cardID}'.`;
        ctx.status = 400;
    }
})

module.exports = router;