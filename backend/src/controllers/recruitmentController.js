const db = require("../config/db");

exports.applyForClub = async (req, res) => {
    const { club_id } = req.body;
    const user_id = req.user.id;

    try {
        await db.execute(
            "INSERT INTO recruitment (user_id, club_id, status) VALUES (?, ?, 'pending')",
            [user_id, club_id]
        );
        res.status(201).json({ message: "Application submitted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to submit application" });
    }
};

exports.getApplicationsByClub = async (req, res) => {
    const { club_id } = req.params;

    try {
        const [applications] = await db.execute(
            "SELECT recruitment.id, users.name, users.email, recruitment.status FROM recruitment JOIN users ON recruitment.user_id = users.id WHERE recruitment.club_id = ?",
            [club_id]
        );
        res.json(applications);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch applications" });
    }
};

exports.updateApplicationStatus = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body; // "accepted" or "rejected"

    try {
        await db.execute("UPDATE recruitment SET status = ? WHERE id = ?", [status, id]);
        res.json({ message: `Application ${status} successfully` });
    } catch (error) {
        res.status(500).json({ error: "Failed to update application status" });
    }
};
