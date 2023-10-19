import koa from "koa";
import KoaLogger from "koa-logger";
import { koaBody } from "koa-body";
import router from "./routes.js";

const app = new koa();

app.use(KoaLogger());
app.use(koaBody());

// koa-router
app.use(router.routes());

app.use((ctx, next) => {
    ctx.body = "Hola mamey\nQue hace?\nMe mira o que hace?"
});

app.listen(3000, () =>{
    console.log("Iniciando la app en el puerto 3000");
});