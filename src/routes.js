import Router from "koa-router";
import users from "./routes/users.js";

const router = new Router();

router.use("/users", users.routes());

export default router;