import { sign, verify } from "jsonwebtoken"
import { User } from "../interfaces/user.interface"

const JWT_SECRET = process.env.JWT_SECRET || 'token.secreto.123'

const generateToken = async (user: User) => {
    const jwt = await sign({id: user.id, nombre: user.name, email: user.email}, JWT_SECRET,
        {
            expiresIn: "2h"
        });
    return jwt;
}

const verifyToken = async (token: string) => {
    const isValid = verify(token, JWT_SECRET);
    return isValid;
}

export {
    generateToken,
    verifyToken
}