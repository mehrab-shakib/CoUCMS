const express = require("express");
const { createEvent, getEventsByClub, deleteEvent } = require("../controllers/eventController");
const { authenticateUser, authorizeAdmin } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", authenticateUser, authorizeAdmin, createEvent);
router.get("/:club_id", getEventsByClub);
router.delete("/:id", authenticateUser, authorizeAdmin, deleteEvent);

module.exports = router;
