import { Request, Response } from "express"
import { loginUser, registerNewUser } from "../services/auth.service";
import { handleHttp } from "../utils/error.handle";

const register = async ({ body }: Request, res: Response) => {
    try{
        const response = await registerNewUser(body);
        res.send(response);
    }catch(e){
        handleHttp(res, 'ERROR_POST_REGISTER');
    }
}

const login = async ({ body }: Request, res: Response) => {
    try{
        const response = await loginUser(body);
        if( response === 'USER_INCORRECT' || response === 'CREDENTIALS_INVALID'){
            res.status(403);
            res.send(response);
        }else{
            res.send(response);
        }
    }catch(e){
        handleHttp(res, 'ERROR_POST_LOGIN');
    }
}

export {
    register,
    login
}