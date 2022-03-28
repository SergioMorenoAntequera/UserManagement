import { Request, Response, Router } from "express";
import { URL } from "../server";
import { readJSONFile } from "../utils/files";
const fs = require('fs')


const usersRouter = Router()

usersRouter.get("/", (req:Request, res:Response, next) => {
    
    let limit:number = parseInt(req.query.limit as string) || 20
    let page:number = parseInt(req.query.page as string) || 0
    let auxWithApplication = req.headers.application as string ?? null
    let withApplication = null
    if(auxWithApplication != null) withApplication = auxWithApplication == 'true'

    let usersFileData = readJSONFile("./data/users.json")
    let users = usersFileData.map(user => user as User)
    
    if(withApplication != null) {        
        if(withApplication) {
            users = users.filter(user => !!user.application)
        } else {
            users = users.filter(user => !user.application)   
        }
    }

    
    users = users.splice(limit*page, limit)
    
    res.status(200).json({
        data:users,
        next: `${URL}${req.baseUrl}/?page=${page+1}&limit=${limit}`,
        prev: `${URL}${req.baseUrl}/?page=${page-1}&limit=${limit}`
    })
})



export default usersRouter