const express = require("express");
const { authenticateUser, authorizeAdmin } = require("../middleware/authMiddleware");
const Recruitment = require("../models/Recruitment");
const router = express.Router();

// Approve recruitment
router.put("/approve-recruitment/:id", authenticateUser, authorizeAdmin, async (req, res) => {
    try {
        const { id } = req.params;
        const recruitment = await Recruitment.findByPk(id);
        if (!recruitment) {
            return res.status(404).json({ error: "Recruitment not found" });
        }
        recruitment.status = "approved";
        await recruitment.save();
        res.json({ message: "Recruitment approved successfully" });
    } catch (error) {
        res.status(500).json({ error: "Error approving recruitment" });
    }
});

module.exports = router;
