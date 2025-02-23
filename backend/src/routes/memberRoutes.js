const express = require("express");
const { joinClub, getMembersByClub, leaveClub, getClubs } = require("../controllers/memberController");
const { authenticateUser } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/join/:club_id", authenticateUser, joinClub);
router.get("/clubs", authenticateUser, getClubs);
router.get("/:club_id", authenticateUser, getMembersByClub);
router.post("/leave", authenticateUser, leaveClub);

module.exports = router;
