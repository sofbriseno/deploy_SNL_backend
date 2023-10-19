import koa from "koa";
import KoaLogger from "koa-logger";
import { koaBody } from "koa-body";

const app = new koa();

app.use(KoaLogger());
app.use(koaBody());

app.use((ctx, next) => {
    ctx.body = "Hola mamaguevo\nQue hace?\nMe mira o que hace?"
});

app.listen(3000, () =>{
    console.log("Iniciando la wea de app en el puerto 3000");
});