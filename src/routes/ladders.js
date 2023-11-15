const Router = require('koa-router');

const router = new Router();


router.post("ladder.create", "/", async (ctx) => {
    const data = ctx.request.body;
    try {
        console.log(data);
        const ladder = await ctx.orm.Escalera.create(data);
        ctx.body = ladder;
        ctx.status = 201;
    } catch (error) {
        ctx.body = error;
        ctx.status = 400;
    }
})

// Lista de Escaleras
router.get("ladder.getladders","/",async(ctx)=>{
    try{
        const ladders = await ctx.orm.Escalera.findAll();
        ctx.body = ladders;
        ctx.status = 200;
    } catch(error){
        ctx.body = error;
        ctx.status = 400;
    }
})
// Información de Escalera específica por ID
router.get("ladder.info", "/:id", async(ctx) => {
    const ladderID = ctx.params.id;
    let ladder;
    try {
        ladder = await ctx.orm.Escalera.findOne({where:{id_casilla:ladderID}});
    } catch(error) {
        ctx.body = error;
        ctx.status = 400;
        return;
    }
    if (!ladder) {
        ctx.body = `La Escalera con ID '${id}' no existe.`;
        ctx.status = 404;
        return
    }
    try {
        ctx.body = ladder;
        ctx.status = 200;
    } catch (error) {
        ctx.body = error;
        ctx.status = 400;
    }

})

router.put("ladder.update", "/:id", async(ctx) => {
    const ladderID = ctx.params.id;
    let ladder;
    try {
        ladder = await ctx.orm.Escalera.findOne({where:{id_casilla:ladderID}});
    } catch (error) {
        ctx.body = error;
        ctx.status = 400;
        return;
    }
    if (!ladder) {
        ctx.body = `No pudimos encontrar una Escalera con ID = '${ladderID}'.`;
        ctx.status = 404;
        return;
    }
    try{
        await ladder.update(ctx.request.body);
        ctx.body = ladder;
        ctx.status = 202;
    } catch (error) {
        ctx.body = `No se pudo actualizar la Escalera con ID = '${ladderID}'.`;
        ctx.status = 400;
    }
})

router.delete("ladder.delete", "/:id", async(ctx) => {
    let ladder;
    const ladderID = ctx.params.id;
    try {
        ladder = await ctx.orm.Escalera.findOne({where:{id_casilla:ladderID}});
    } catch (error) {
        ctx.body = error;
        ctx.status = 400;
        return;
    }
    if (!ladder) {
        ctx.body = `No pudimos encontrar una Escalera con ID = '${ladderID}'.`;
        ctx.status = 404;
        return;
    }
    try{
        await ladder.destroy();
        ctx.body = `La Escalera, con ID = '${ladderID}', fue eliminada con éxito!`;
        ctx.status = 204;
    } catch (error) {
        ctx.body = `No se pudo eliminar la Escalera con ID = '${ladderID}'.`;
        ctx.status = 400;
    }
})

module.exports = router;