import {Request, Response} from "express";

export class UserController {
    GetUsers(req:Request, res:Response){
        res.status(200).json({
            user: "mirko wlk"
        })
    }
}
