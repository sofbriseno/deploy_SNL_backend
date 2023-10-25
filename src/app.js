// import koa from "koa";
const Koa = require('koa');
// import KoaLogger from "koa-logger";
const KoaLogger = require('koa-logger');
// import { koaBody } from "koa-body";
const { koaBody } = require('koa-body');
// import router from "./routes.js";
const router = require('./routes.js');
const orm = require('./models');

// Crear instancia de Koa
const app = new Koa();

// Acceder al orm en cualquier directorio
app.context.orm = orm;

// Middlewares proporcionados por Koa
app.use(KoaLogger());
app.use(koaBody());

// Koa router
app.use(router.routes());

// Middleware personalizado. Encargado de dar respuesta "Hola Mundo!"
app.use((ctx, next) => {
    ctx.body = "Hola Mundo! Saludos desde IIC2513";
});

// Hacer que el servidor escuche en el puerto 3000
// app.listen(3000, () =>{
//     console.log("Iniciando la app en el puerto 3000");
// });

module.exports = app;