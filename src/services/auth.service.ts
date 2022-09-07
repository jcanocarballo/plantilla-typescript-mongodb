import { Auth } from "../interfaces/auth.interface"
import { User } from "../interfaces/user.interface";
import UserModel from "../models/user"
import { encrypt, verified } from "../utils/bcryp.handle";
import { generateToken } from "../utils/jwt.handle";

const registerNewUser = async ({ email, password, name, description }: User) => {
    const user = await UserModel.findOne({ email: email});
    if (user) return 'ALREADY_USER';
    password = await encrypt(password);
    const response = await UserModel.create({ email, password, name, description });
    return response;
}

const loginUser = async ({ email, password }: Auth) => {
    const user = await UserModel.findOne({ email: email});
    if (!user) return 'USER_INCORRECT';
    const passwordHash = user.password;
    const isValid = await verified(password, passwordHash);
    if(!isValid) return 'CREDENTIALS_INVALID';

    const token = await generateToken(user);

    const data = {
        token,
        user
    }
    return data;
}

export {
    registerNewUser,
    loginUser
}