const Router = require('koa-router');

const router = new Router();

router.post("users.create","/",async(ctx)=>{
    try{
        const user = await ctx.orm.Usuario.create(ctx.request.body);
        ctx.body = user;
        ctx.status = 201;
    } catch(error){
        ctx.body = error;
        ctx.status = 400;
    }
})

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

module.exports = router;