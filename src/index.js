import koa from "koa";

const app = new koa();

app.listen(3000, () =>{
    console.log("Iniciando la wea de app , porfavor espere... \nEstá en el puerto 3000");
});