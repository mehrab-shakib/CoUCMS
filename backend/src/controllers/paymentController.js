const db = require("../config/db");

exports.makePayment = async (req, res) => {
    const { club_id, amount, transaction_id } = req.body;
    const user_id = req.user.id;

    try {
        await db.execute(
            "INSERT INTO payments (user_id, club_id, amount, transaction_id, status) VALUES (?, ?, ?, ?, 'pending')",
            [user_id, club_id, amount, transaction_id]
        );
        res.status(201).json({ message: "Payment initiated successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to initiate payment" });
    }
};

exports.getUserPayments = async (req, res) => {
    const user_id = req.user.id;

    try {
        const [payments] = await db.execute("SELECT * FROM payments WHERE user_id = ?", [user_id]);
        res.json(payments);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch payments" });
    }
};

exports.verifyPayment = async (req, res) => {
    const { id, status } = req.body; // "completed" or "failed"

    try {
        await db.execute("UPDATE payments SET status = ? WHERE id = ?", [status, id]);
        res.json({ message: `Payment status updated to ${status}` });
    } catch (error) {
        res.status(500).json({ error: "Failed to verify payment" });
    }
};
