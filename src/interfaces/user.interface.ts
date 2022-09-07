import { Auth } from "./auth.interface";

export interface User extends Auth{
    id?: number;
    name: string;
    description: string;
}