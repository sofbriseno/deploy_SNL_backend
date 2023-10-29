const Koa = require('koa');
const KoaLogger = require('koa-logger');
const { koaBody } = require('koa-body');
const cors = require('@koa/cors');
const router = require('./routes.js');
const orm = require('./models');

// Crear instancia de Koa
const app = new Koa();

// Acceder al orm en cualquier directorio
app.context.orm = orm;

// Cors para poder acceder desde frontend
app.use(cors());

// Middlewares proporcionados por Koa
app.use(KoaLogger());
app.use(koaBody());

// Koa router
app.use(router.routes());

// Middleware personalizado. Encargado de dar respuesta "Hola Mundo!"
app.use((ctx, next) => {
    ctx.body = "Hola Mundo! Saludos desde IIC2513!";
});

// Hacer que el servidor escuche en el puerto 3000
// app.listen(3000, () =>{
//     console.log("Iniciando la app en el puerto 3000");
// });

module.exports = app;