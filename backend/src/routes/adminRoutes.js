const express = require("express");
const { authenticateUser, isAdmin } = require("../middleware/authMiddleware");
const Club = require("../models/Club");
const router = express.Router();

// Approve a club
router.put("/approve-club/:id", authenticateUser, isAdmin, async (req, res) => {
    try {
        const { id } = req.params;
        const club = await Club.findByPk(id);
        if (!club) {
            return res.status(404).json({ error: "Club not found" });
        }
        club.status = "approved";
        await club.save();
        res.json({ message: "Club approved successfully" });
    } catch (error) {
        res.status(500).json({ error: "Error approving club" });
    }
});

module.exports = router;
