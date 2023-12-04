const Router = require('koa-router');

const router = new Router();


router.post("space.create", "/", async (ctx) => {
    const data = ctx.request.body;
    try {
        console.log(data);
        const space = await ctx.orm.Casilla.create(data);
        ctx.body = space;
        ctx.status = 201;
    } catch (error) {
        ctx.body = error;
        ctx.status = 400;
    }
})

// Lista de Casillas
router.get("space.getspaces","/",async(ctx)=>{
    try{
        const spaces = await ctx.orm.Casilla.findAll();
        ctx.body = spaces;
        ctx.status = 200;
    } catch(error){
        ctx.body = error;
        ctx.status = 400;
    }
})
// Información de Casilla específica por ID
router.get("space.info", "/:id", async(ctx) => {
    let space;
    try {
        space = await ctx.orm.Casilla.findByPk(ctx.params.id);
    } catch(error) {
        ctx.body = error;
        ctx.status = 400;
        return;
    }
    if (!space) {
        ctx.body = `La Casilla con ID '${ctx.params.id}' no existe.`;
        ctx.status = 404;
        return
    }
    try {
        ctx.body = space;
        ctx.status = 200;
    } catch (error) {
        ctx.body = error;
        ctx.status = 400;
    }

})

router.put("space.update", "/:id", async(ctx) => {
    const spaceID = ctx.params.id;
    let space;
    try {
        space = await ctx.orm.Casilla.findByPk(spaceID);
    } catch (error) {
        ctx.body = error;
        ctx.status = 400;
        return;
    }
    if (!space) {
        ctx.body = `No pudimos encontrar una Casilla con ID = '${spaceID}'.`;
        ctx.status = 404;
        return;
    }
    try{
        await space.update(ctx.request.body);
        ctx.body = space;
        ctx.status = 202;
    } catch (error) {
        ctx.body = `No se pudo actualizar la Casilla con ID = '${spaceID}'.`;
        ctx.status = 400;
    }
})

router.delete("space.delete", "/:id", async(ctx) => {
    let space;
    const spaceID = ctx.params.id;
    try {
        space = await ctx.orm.Casilla.findByPk(spaceID);
    } catch (error) {
        ctx.body = error;
        ctx.status = 400;
        return;
    }
    if (!space) {
        ctx.body = `No pudimos encontrar una Casilla con ID = '${spaceID}'.`;
        ctx.status = 404;
        return;
    }
    try{
        await space.destroy();
        ctx.body = `La Casilla, con ID = '${spaceID}', fue eliminada con éxito!`;
        ctx.status = 204;
    } catch (error) {
        ctx.body = `No se pudo eliminar la Casilla con ID = '${spaceID}'.`;
        ctx.status = 400;
    }
})

module.exports = router;