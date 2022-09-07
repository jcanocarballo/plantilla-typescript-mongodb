import { compare, hash } from "bcryptjs"

const encrypt = async (password: string) => {
    const passwordHash = await hash(password, 8);
    return passwordHash;
}

const verified = async (password: string, passHash: string) => {
    const isCorrect = await compare(password, passHash)
    return isCorrect;
}

export {
    encrypt,
    verified
}