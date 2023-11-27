const Router = require('koa-router');

const router = new Router();

router.post("player.create","/",async(ctx)=>{
    const data = ctx.request.body;
    try{
        const player = await ctx.orm.Jugador.create({
            personaje: data.personaje,
            dinero: 1000,
            id_casilla: 1,
            id_partida: data.id_partida,
            id_usuario: data.id_usuario,
        });
        ctx.body = player;
        ctx.status = 201;
    } catch(error){
        ctx.body = error;
        ctx.status = 400;
    }
});

// Lista de jugadores de una partida específica
router.get("player.getPlayers","/:id",async(ctx)=>{
    const gameID = ctx.params.id;
    try{
        const players = await ctx.orm.Jugador.findAll({where:{id_partida:gameID}});
        ctx.body = players;
        ctx.status = 200;
    } catch(error){
        ctx.body = error;
        ctx.status = 400;
    }
})

router.get("players.user", "/valid/:id", async (ctx) => {
    const userID = ctx.params.id;
    try {
        const players = await ctx.orm.Jugador.findAll({
            where: {id_usuario:userID},
            include: [{
                model: ctx.orm.Partida,
                require:true,
                where: {estado:true}
            }]
        })
        ctx.body = players;
        ctx.status = 200
    } catch (error) {
        ctx.body = error;
        ctx.status = 400
    }
})

router.put("player.update", "/:id/:personaje", async(ctx) => {
    const character = ctx.params.personaje;
    const gameID = ctx.params.id;
    const data = ctx.request.body;
    let player;
    console.log(gameID);
    console.log(character);
    console.log(data);
    try{
        player = await ctx.orm.Jugador.findOne({where:{id_partida:gameID, personaje:character}});
    } catch (error) {
        ctx.body = error;
        ctx.status = 400;
        return;
    }
    if (!player) {
        ctx.body =  `El jugador no fue encontrado`;
        ctx.status = 404;
        return;
    }
    try {
        await player.update(data);
        ctx.body = player;
        ctx.status = 202; 
    } catch (error) {
        ctx.body = error;
        ctx.status = 400;
    }
})

router.delete("player.delete", "/:id", async(ctx) => {
    const playerID = ctx.params.id;
    let player;
    
    try {
        player = await ctx.orm.Jugador.findByPk(playerID);
    } catch (error) {
        ctx.body = error;
        ctx.status = 400;
        return;
    }
    if (!player) {
        ctx.body = `No pudimos encontrar una jugador con ID = '${playerID}'.`;
        ctx.status = 404;
        return;
    }
    try{
        await player.destroy();
        ctx.body = `El jugador, con ID = '${playerID}', fue eliminada con éxito!`;
        ctx.status = 204;
    } catch (error) {
        ctx.body = `No se pudo eliminar lel jugador con ID = '${playerID}'.`;
        ctx.status = 400;
    }
})

module.exports = router;