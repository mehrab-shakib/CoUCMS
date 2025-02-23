const db = require("../config/db");
const sequelize = require("sequelize");
const Member = require("../models/Member");
const User = require("../models/User");
const Club = require("../models/Club");

exports.joinClub = async (req, res) => {
    try {
        const { clubId } = req.body;
        const userId = req.user.id; // Get user ID from authenticated request

        // Check if the user is already in the club
        const existingMembership = await Member.findOne({ where: { userId, clubId } });
        if (existingMembership) {
            return res.status(400).json({ message: "You have already joined this club." });
        }

        // Add user to the club
        await Member.create({ userId, clubId });

        res.status(200).json({ message: "Successfully joined the club!" });
    } catch (error) {
        console.error("Error joining club:", error);
        res.status(500).json({ message: "Server error" });
    }
};
exports.getClubs = async (req, res) => {
  
  try {
    const clubs = await Club.findAll();
    
    res.json(clubs);
  } catch (error) {
    console.error('Error fetching clubs:', error);
    res.status(500).json({ error: 'Failed to fetch clubs' });
  }
};


exports.getMembersByClub = async (req, res) => {
    const { clubId } = req.body;

    try {
        const members = await Member.findAll({
            where: { clubId},
            include: [{ model: User, attributes: ['id', 'name'] }]
          });
        res.json(members);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch members" });
    }
};

exports.leaveClub = async (req, res) => {
    const { club_id } = req.body;
    const user_id = req.user.id;
  
    try {
      await Member.destroy({
        where: { userId: user_id, clubId: club_id }
      });
      res.json({ message: "Left club successfully" });
    } catch (error) {
      res.status(500).json({ error: "Failed to leave club" });
    }
  };

 