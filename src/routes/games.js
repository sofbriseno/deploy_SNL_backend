const Router = require('koa-router');

const router = new Router();

router.post("game.create","/",async(ctx)=>{
    try{
        const game = await ctx.orm.Partida.create({
            estado: true,
            turno_actual: 1,
            num_jugadores: 1
        });
        ctx.body = game;
        ctx.status = 201;
    } catch(error){
        ctx.body = error;
        ctx.status = 400;
    }
});

// Lisa de partidas
router.get("game.getGames","/",async(ctx)=>{
    try{
        const games = await ctx.orm.Partida.findAll();
        ctx.body = games;
        ctx.status = 200;
    } catch(error){
        ctx.body = error;
        ctx.status = 400;
    }
})
// Información de partida específica por ID
router.get("game.info", "/:id", async(ctx) => {
    let game;
    try {
        game = await ctx.orm.Partida.findByPk(ctx.params.id);
    } catch(error) {
        ctx.body = error;
        ctx.status = 400;
        return;
    }
    if (!game) {
        ctx.body = `La partida con ID '${id}' no existe.`;
        ctx.status = 404;
        return
    }
    try {
        ctx.body = game;
        ctx.status = 200;
    } catch (error) {
        ctx.body = error;
        ctx.status = 400;
    }
})


// información de partida + jugadores dentro de ella
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
});

// Actualiza el turno
router.put("game.update", "/turno/:id", async(ctx) => {
    const gameID = ctx.params.id;
    let turno;
    let game;
    try{
        game = await ctx.orm.Partida.findByPk(gameID);
    } catch (error) {
        ctx.body = error;
        ctx.status = 400;
        return;
    }
    if (!game) {
        ctx.body =  `La partida con ID = '${gameID}' no fue encontrada`;
        ctx.status = 400;
        return;
    }
    try {
        if (game.turno_actual < game.num_jugadores) {
            turno = game.turno_actual + 1;
        }
        else {
            turno = 1;
        }
        await game.update({
            estado: game.estado,
            turno_actual: turno,
            num_jugadores: game.num_jugadores,
        });
        ctx.body = game;
        ctx.status = 202; 
    } catch (error) {
        ctx.body = error;
        ctx.status = 400;
    }
})



// Incrementa el número de jugadores de la partida
router.put("game.update", "/num_jugadores/:id", async(ctx) => {
    const gameID = ctx.params.id;
    let num;
    let game;
    try{
        game = await ctx.orm.Partida.findByPk(gameID);
    } catch (error) {
        ctx.body = error;
        ctx.status = 400;
        return;
    }
    if (!game) {
        ctx.body =  `La partida con ID = '${gameID}' no fue encontrada`;
        ctx.status = 404;
        return;
    }
    if (game.num_jugadores == 4) {
        ctx.body = `La partida con ID = '${gameID}' ya tiene 4 jugadores`;
        ctx.state = 400;
        return;
    }
    try {
        num = game.num_jugadores + 1;
        await game.update({
            estado: game.estado,
            turno_actual: game.turno_actual,
            num_jugadores: num,
        });
        ctx.body = game;
        ctx.status = 202; 
    } catch (error) {
        ctx.body = error;
        ctx.status = 400;
    }
})

// Disminuir el número de jugadores de la partida
router.put("game.update", "/num_players/:id", async(ctx) => {
    const gameID = ctx.params.id;
    let num;
    let game;
    try{
        game = await ctx.orm.Partida.findByPk(gameID);
    } catch (error) {
        ctx.body = error;
        ctx.status = 400;
        return;
    }
    if (!game) {
        ctx.body =  `La partida con ID = '${gameID}' no fue encontrada`;
        ctx.status = 404;
        return;
    }
    try {
        num = game.num_jugadores - 1;
        await game.update({
            estado: game.estado,
            turno_actual: game.turno_actual,
            num_jugadores: num,
        });
        ctx.body = game;
        ctx.status = 202; 
    } catch (error) {
        ctx.body = error;
        ctx.status = 400;
    }
})

// cambia el estado de la partida a false (true: partida en juego | false: partida terminada)
router.put("game.update", "/estado/:id", async(ctx) => {
    const gameID = ctx.params.id;
    let game;
    try{
        game = await ctx.orm.Partida.findByPk(gameID);
    } catch (error) {
        ctx.body = error;
        ctx.status = 400;
        return;
    }
    if (!game) {
        ctx.body =  `La partida con ID = '${gameID}' no fue encontrada`;
        ctx.status = 404;
        return;
    }
    if (game.estado == false) {
        ctx.body = `La partida con ID = '${gameID}' ya está terminada`;
        ctx.state = 400;
        return;
    }
    try {
        num = game.num_jugadores + 1;
        await game.update({
            estado: false,
            turno_actual: game.turno_actual,
            num_jugadores: game.num_jugadores,
        });
        ctx.body = game;
        ctx.status = 202; 
    } catch (error) {
        ctx.body = error;
        ctx.status = 400;
    }
})

// Editar una partida
router.put("game.update", "/:id", async(ctx) => {
    const gameID = ctx.params.id;
    const data = ctx.request.body;
    let game;
    try{
        game = await ctx.orm.Partida.findByPk(gameID);
    } catch (error) {
        ctx.body = error;
        ctx.status = 400;
        return;
    }
    if (!game) {
        ctx.body =  `La partida con ID = '${gameID}' no fue encontrada`;
        ctx.status = 404;
        return;
    }
    try {
        await game.update(data);
        ctx.body = game;
        ctx.status = 202; 
    } catch (error) {
        ctx.body = error;
        ctx.status = 400;
    }
})

router.delete("game.delete", "/:id", async(ctx) => {
    let game;
    const gameID = ctx.params.id;
    try {
        game = await ctx.orm.Partida.findByPk(gameID);
    } catch (error) {
        ctx.body = error;
        ctx.status = 400;
        return;
    }
    if (!game) {
        ctx.body = `No pudimos encontrar una partida con ID = '${gameID}'.`;
        ctx.status = 404;
        return;
    }
    try{
        await game.destroy();
        ctx.body = `La partida, con ID = '${gameID}', fue eliminada con éxito!`;
        ctx.status = 204;
    } catch (error) {
        ctx.body = `No se pudo eliminar la partida con ID = '${gameID}'.`;
        ctx.status = 400;
    }
})

module.exports = router;
