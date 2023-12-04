const Router = require('koa-router');

const router = new Router();


router.post("snake.create", "/", async (ctx) => {
    const data = ctx.request.body;
    try {
        console.log(data);
        const snake = await ctx.orm.Serpiente.create(data);
        ctx.body = snake;
        ctx.status = 201;
    } catch (error) {
        ctx.body = error;
        ctx.status = 400;
    }
})

// Lista de Serpientes
router.get("snake.getsnakes","/",async(ctx)=>{
    try{
        const snakes = await ctx.orm.Serpiente.findAll();
        ctx.body = snakes;
        ctx.status = 200;
    } catch(error){
        ctx.body = error;
        ctx.status = 400;
    }
})
// Información de Serpiente específica por ID
router.get("snake.info", "/:id", async(ctx) => {
    const snakeID = ctx.params.id;
    let snake;
    try {
        snake = await ctx.orm.Serpiente.findOne({where:{id_casilla:snakeID}});
    } catch(error) {
        ctx.body = error;
        ctx.status = 400;
        return;
    }
    if (!snake) {
        ctx.body = `La Serpiente con ID '${ctx.params.id}' no existe.`;
        ctx.status = 404;
        return
    }
    try {
        ctx.body = snake;
        ctx.status = 200;
    } catch (error) {
        ctx.body = error;
        ctx.status = 400;
    }

})

router.put("snake.update", "/:id", async(ctx) => {
    const snakeID = ctx.params.id;
    let snake;
    try {
        snake = await ctx.orm.Serpiente.findOne({where:{id_casilla:snakeID}});
    } catch (error) {
        ctx.body = error;
        ctx.status = 400;
        return;
    }
    if (!snake) {
        ctx.body = `No pudimos encontrar una Serpiente con ID = '${snakeID}'.`;
        ctx.status = 404;
        return;
    }
    try{
        await snake.update(ctx.request.body);
        ctx.body = snake;
        ctx.status = 202;
    } catch (error) {
        ctx.body = `No se pudo actualizar la Serpiente con ID = '${snakeID}'.`;
        ctx.status = 400;
    }
})

router.delete("snake.delete", "/:id", async(ctx) => {
    let snake;
    const snakeID = ctx.params.id;
    try {
        snake = await ctx.orm.Serpiente.findOne({where:{id_casilla:snakeID}});
    } catch (error) {
        ctx.body = error;
        ctx.status = 400;
        return;
    }
    if (!snake) {
        ctx.body = `No pudimos encontrar una Serpiente con ID = '${snakeID}'.`;
        ctx.status = 404;
        return;
    }
    try{
        await snake.destroy();
        ctx.body = `La Serpiente, con ID = '${snakeID}', fue eliminada con éxito!`;
        ctx.status = 204;
    } catch (error) {
        ctx.body = `No se pudo eliminar la Serpiente con ID = '${snakeID}'.`;
        ctx.status = 400;
    }
})

module.exports = router;