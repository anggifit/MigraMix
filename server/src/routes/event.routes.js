import { Router } from "express";
import { validateSchemaRequest } from "../middleware/validator.requestBody.js";
import { authenticateToken } from "../middleware/auth.middleware.js";
import { eventSchema } from "../schemas/event.schema.js";
import {
  putEventByOrganizer,
  getEventByOrganizer,
} from "../controllers/event.controllers.js";
const router = Router();

router.put(
  "/events",
  authenticateToken,
  validateSchemaRequest(eventSchema),
  putEventByOrganizer
);
router.get("/eventsByOrganizer", authenticateToken, getEventByOrganizer);

export default router;
