const express = require("express");
const { applyForClub, getApplicationsByClub, updateApplicationStatus } = require("../controllers/recruitmentController");
const { authenticateUser, authorizeAdmin } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/apply", authenticateUser, applyForClub);
router.get("/:club_id", authenticateUser, authorizeAdmin, getApplicationsByClub);
router.put("/:id", authenticateUser, authorizeAdmin, updateApplicationStatus);

module.exports = router;
