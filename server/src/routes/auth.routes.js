import { Router } from "express";
import { validateSchemaRequest } from "../middleware/validator.requestBody.js";
import { signUpSchema } from "../schemas/auth.schemas.js";
import { signUp, signIn, getUsers } from "../controllers/auth.controller.js";
const router = Router();

router.post("/sign-up", validateSchemaRequest(signUpSchema), signUp);
router.post("/sign-in", signIn);
router.get("/getUsersInfo", getUsers);

export default router;
