import { Router } from "express";
import {
  eventsById,
  updateEvent,
  eventByTypeofactivity,
} from "../controllers/events.controller.js";
import { authenticateToken } from "../middleware/auth.middleware.js";

const router = Router();

router.get("/events-organizer", authenticateToken, eventsById);
router.put("/event-update", authenticateToken, updateEvent);
router.get("/events-factivity/:type", eventByTypeofactivity);

export default router;
