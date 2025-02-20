const express = require("express");
const { makePayment, getUserPayments, verifyPayment } = require("../controllers/paymentController");
const { authenticateUser, authorizeAdmin } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", authenticateUser, makePayment);
router.get("/", authenticateUser, getUserPayments);
router.put("/verify", authenticateUser, authorizeAdmin, verifyPayment);

module.exports = router;
