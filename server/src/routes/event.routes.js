import { Router } from "express";
import { validateSchemaRequest } from "../middleware/validator.requestBody.js";
import { authenticateToken } from "../middleware/auth.middleware.js";
import { eventSchema } from "../schemas/event.schema.js";
import {
  createEventByOrganizer,
  editEventByOrganizer,
  getEventByOrganizer,
  getEventById,
  getAllEvents,
  deleteEventByOrganizer
} from "../controllers/event.controllers.js";

const router = Router();

router.post(
  "/events",
  authenticateToken,
  validateSchemaRequest(eventSchema),
  createEventByOrganizer
);
router.put(
  "/edit-event",
  authenticateToken,
  validateSchemaRequest(eventSchema),
  editEventByOrganizer
);
router.get("/eventsByOrganizer", authenticateToken, getEventByOrganizer);
router.get("/eventsById/:eventId", authenticateToken, getEventById);
router.get("/allEvents", getAllEvents);
router.delete("/delete-event/:eventId", authenticateToken, deleteEventByOrganizer);

export default router;
