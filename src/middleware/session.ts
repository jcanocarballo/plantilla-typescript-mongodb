import { NextFunction, Request, Response } from "express"
import { RequestExt } from "../interfaces/req-ext";
import { verifyToken } from "../utils/jwt.handle";

const checkSession = async (req: RequestExt, res: Response, next: NextFunction) => {
    try{
        const jwtByUser = req.headers.authorization || '';
        const jwt = jwtByUser.split(' ').pop();
        const isUser = await verifyToken(`${jwt}`) as { id: string, nombre: string, email: string };
        console.log(isUser);
        if(!isUser) {
            res.status(401);
            res.send('SESSION_NO_VALID');
        }else{
            req.user = isUser;
            next();
        }
    }catch(e){
        res.status(400);
        res.send('SESSION_NO_VALID')
    }
}

export { 
    checkSession
}