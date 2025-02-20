const db = require("../config/db");

exports.createEvent = async (req, res) => {
    const { club_id, title, description, date, venue } = req.body;

    try {
        await db.execute(
            "INSERT INTO events (club_id, title, description, date, venue) VALUES (?, ?, ?, ?, ?)",
            [club_id, title, description, date, venue]
        );
        res.status(201).json({ message: "Event created successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to create event" });
    }
};

exports.getEventsByClub = async (req, res) => {
    const { club_id } = req.params;

    try {
        const [events] = await db.execute("SELECT * FROM events WHERE club_id = ?", [club_id]);
        res.json(events);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch events" });
    }
};

exports.deleteEvent = async (req, res) => {
    const { id } = req.params;

    try {
        await db.execute("DELETE FROM events WHERE id = ?", [id]);
        res.json({ message: "Event deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete event" });
    }
};
