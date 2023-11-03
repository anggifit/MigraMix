import { Router } from "express";
import { validateSchemaRequest } from "../middleware/validator.requestBody.js";
import { signUpSchema } from "../schemas/auth.schemas.js";
import { authenticateToken } from "../middleware/auth.middleware.js";
import {
  signUp,
  signIn,
  putProfileByArtist,
  getProfileArtist,
  getArtistList,
} from "../controllers/auth.controller.js";
const router = Router();

/*Exe middlware(req,res,next) antes de servir la ruta desde controller*/
router.post("/sign-up", validateSchemaRequest(signUpSchema), signUp);
router.post("/sign-in", signIn);
router.put("/artists", authenticateToken, putProfileByArtist);
router.get("/artists", authenticateToken, getProfileArtist);
router.get("/artistsList", getArtistList);

export default router;
