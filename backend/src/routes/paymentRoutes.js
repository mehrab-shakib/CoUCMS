const express = require("express");
const { authenticateUser, authorizeAdmin } = require("../middleware/authMiddleware");
const Payment = require("../models/Payment");
const router = express.Router();

// Get all pending payments
router.get("/pending", authenticateUser, authorizeAdmin, async (req, res) => {
    try {
        const payments = await Payment.findAll({ where: { status: "pending" } });
        res.json(payments);
    } catch (error) {
        res.status(500).json({ error: "Error fetching payments" });
    }
});

// Approve a payment
router.put("/approve-payment/:id", authenticateUser, authorizeAdmin, async (req, res) => {
    try {
        const { id } = req.params;
        const payment = await Payment.findByPk(id);
        if (!payment) {
            return res.status(404).json({ error: "Payment not found" });
        }
        payment.status = "completed";
        await payment.save();
        res.json({ message: "Payment approved successfully" });
    } catch (error) {
        res.status(500).json({ error: "Error approving payment" });
    }
});

module.exports = router;
