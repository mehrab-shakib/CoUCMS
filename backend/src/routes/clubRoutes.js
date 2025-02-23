const express = require("express");
const router = express.Router();
const Club = require("../models/Club");

router.post("/add", async (req, res) => {
    try {
        const { name, description } = req.body;
        const club = await Club.create({ name, description });
        res.status(201).json({ success: true, club });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

router.get("/clubs", async (req, res) => {
    try {
        const clubs = await Club.findAll();
        res.status(200).json(clubs);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

module.exports = router;
