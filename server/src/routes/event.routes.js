import { Router } from "express";
import { validateSchemaRequest } from "../middleware/validator.requestBody.js";
import { authenticateToken } from "../middleware/auth.middleware.js";
import { eventSchema } from "../schemas/event.schema.js";
import {
  putEventByOrganizer,
  getEventByOrganizer,
  eventsById,
  updateEvent,
  eventByTypeofactivity,
} from "../controllers/event.controllers.js";
const router = Router();

router.put(
  "/events",
  authenticateToken,
  validateSchemaRequest(eventSchema),
  putEventByOrganizer
);
router.get("/eventsByOrganizer", authenticateToken, getEventByOrganizer);
router.get("/events-organizer", authenticateToken, eventsById);
router.put("/event-update", authenticateToken, updateEvent);
router.get("/events-factivity/:type", eventByTypeofactivity);
export default router;
