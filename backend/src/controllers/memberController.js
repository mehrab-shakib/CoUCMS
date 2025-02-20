const db = require("../config/db");

exports.joinClub = async (req, res) => {
    const { club_id } = req.body;
    const user_id = req.user.id;

    try {
        await db.execute("INSERT INTO members (user_id, club_id) VALUES (?, ?)", [user_id, club_id]);
        res.status(201).json({ message: "Joined club successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to join club" });
    }
};

exports.getMembersByClub = async (req, res) => {
    const { club_id } = req.params;

    try {
        const [members] = await db.execute(
            "SELECT users.id, users.name, members.role FROM members JOIN users ON members.user_id = users.id WHERE members.club_id = ?",
            [club_id]
        );
        res.json(members);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch members" });
    }
};

exports.leaveClub = async (req, res) => {
    const { club_id } = req.body;
    const user_id = req.user.id;

    try {
        await db.execute("DELETE FROM members WHERE user_id = ? AND club_id = ?", [user_id, club_id]);
        res.json({ message: "Left club successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to leave club" });
    }
};
