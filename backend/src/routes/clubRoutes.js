const express = require("express");
const { createClub, getAllClubs, getClubById, updateClub, deleteClub } = require("../controllers/clubController");
const { authenticateUser, authorizeAdmin } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", authenticateUser, authorizeAdmin, createClub);
router.get("/", getAllClubs);
router.get("/:id", getClubById);
router.put("/:id", authenticateUser, authorizeAdmin, updateClub);
router.delete("/:id", authenticateUser, authorizeAdmin, deleteClub);

module.exports = router;
