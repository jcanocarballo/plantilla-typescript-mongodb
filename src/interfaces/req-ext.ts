import { JwtPayload } from "jsonwebtoken";
import { Request } from "express";

export interface RequestExt extends Request {
  user?: JwtPayload | { id: string, nombre: string, email: string };
}