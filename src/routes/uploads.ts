import { Router } from "express";
import { getFile } from "../controllers/upload";
import multerMiddleware from "../middleware/file";
import { checkSession } from "../middleware/session";

const router = Router();

router.post("/", checkSession, multerMiddleware.single("myfile"), getFile);

export { router };