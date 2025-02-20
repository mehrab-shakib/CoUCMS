const db = require("../config/db");

exports.createClub = async (req, res) => {
    const { name, description } = req.body;
    
    try {
        const [result] = await db.execute(
            "INSERT INTO clubs (name, description) VALUES (?, ?)",
            [name, description]
        );
        res.status(201).json({ message: "Club created successfully", clubId: result.insertId });
    } catch (error) {
        res.status(500).json({ error: "Club creation failed" });
    }
};

exports.getAllClubs = async (req, res) => {
    try {
        const [clubs] = await db.execute("SELECT * FROM clubs");
        res.json(clubs);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch clubs" });
    }
};

exports.getClubById = async (req, res) => {
    const { id } = req.params;

    try {
        const [clubs] = await db.execute("SELECT * FROM clubs WHERE id = ?", [id]);
        if (clubs.length === 0) return res.status(404).json({ error: "Club not found" });

        res.json(clubs[0]);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch club" });
    }
};

exports.updateClub = async (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;

    try {
        await db.execute("UPDATE clubs SET name = ?, description = ? WHERE id = ?", [name, description, id]);
        res.json({ message: "Club updated successfully" });
    } catch (error) {
        res.status(500).json({ error: "Club update failed" });
    }
};

exports.deleteClub = async (req, res) => {
    const { id } = req.params;

    try {
        await db.execute("DELETE FROM clubs WHERE id = ?", [id]);
        res.json({ message: "Club deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Club deletion failed" });
    }
};
