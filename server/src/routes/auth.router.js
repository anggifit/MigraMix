import { Router } from "express";
import { validateSchemaRequest } from "../middleware/validator.requestBody.js";
import { signUpSchema } from "../schemas/auth.schemas.js";
import { signUp } from "../controllers/auth.controller.js";
const router = Router();

/*Exe middlware(req,res,next) antes de servir la ruta desde controller*/
router.post("/sign-up", validateSchemaRequest(signUpSchema), signUp);

export default router;
