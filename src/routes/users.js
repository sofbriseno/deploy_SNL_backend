const Router = require('koa-router');

const router = new Router();


router.get("users.list","/",async(ctx)=>{
    try{
        const users = await ctx.orm.Usuario.findAll();
        // Si quisieramos mostrar el usuario por su id sería de la siguiente manera:
        // 1. const user = await ctx.orm.Usuario.findByPk(ctx.params.id); -> Este busca a partir de la PrimaryKey
        // 2. const user = await ctx.orm.Usuario.findOne({where:{id:ctx.params.id}}); -> Este busca por filtros/condiciones
        // ctx.body = user;
        // y en postman el URL a usar seria /users/5
        ctx.body = users;
        ctx.status = 200;
    } catch(error){
        ctx.body = error;
        ctx.status = 400;
    }
})

router.delete("users.delete", "/:id", async(ctx)=>{
    try{
        const user = await ctx.orm.Usuario.findOne({where: {id: ctx.params.id}});
        if (!user) {
            ctx.throw(404, 'Usuario no encontrado');
          }
        await user.destroy();
        ctx.body = user;
        ctx.status = 204;
    } catch(error){
        ctx.body = error;
        ctx.status = 400;
    }
})

// PUT /users/:id - Actualizar un usuario por ID
router.put("users.update","/:id",async(ctx)=>{
    try{
        const userId = ctx.params.id;
        const newData = ctx.request.body;
        
        // Buscar el usuario por ID
        const user = await ctx.orm.Usuario.findByPk(userId);

        if (!user) {
            ctx.status = 404;
            ctx.body = { error: 'Usuario no encontrado' };
            return;
        }

        // Actualizar los datos del usuario
        await user.update(newData);

        ctx.body = user;
        ctx.status = 200;
    } catch(error){
        ctx.body = error;
        ctx.status = 400;
    }
})

module.exports = router;