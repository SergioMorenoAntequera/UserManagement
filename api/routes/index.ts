import { Router } from "express";
import usersRouter from "./users";

const appRoutes = Router()

appRoutes.get("/", (req, res, next) => {
    res.redirect('/users');
})

appRoutes.use("/users", usersRouter)

export default appRoutes;