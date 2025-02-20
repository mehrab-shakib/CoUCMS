const express = require("express");
const { joinClub, getMembersByClub, leaveClub } = require("../controllers/memberController");
const { authenticateUser } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/join", authenticateUser, joinClub);
router.get("/:club_id", authenticateUser, getMembersByClub);
router.post("/leave", authenticateUser, leaveClub);

module.exports = router;
