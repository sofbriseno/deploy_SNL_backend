const Router = require('koa-router');

const router = new Router();

router.post("game.create","/",async(ctx)=>{
    try{
        const game = await ctx.orm.Partida.create(ctx.request.body);
        ctx.body = game;
        ctx.status = 201;
    } catch(error){
        ctx.body = error;
        ctx.status = 400;
    }
})

router.get("game.getGame","/gameData/:id",async(ctx)=>{
    try{
        const game = await ctx.orm.Partida.findAll({
            attributes: ['id', 'estado', 'turno_actual'],
            include: [
                {
                    model: ctx.orm.Jugador,
                    required: true,
                    attributes: ['id_usuario', 'personaje', 'id_casilla', 'dinero'],
                    where: {
                        id_partida: ctx.params.id,
                    },
                },
            ],
        });
        ctx.body = game;
        ctx.status = 200;
    } catch(error){
        ctx.body = error;
        ctx.status = 400;
    }
})


module.exports = router;