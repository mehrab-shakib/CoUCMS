const { DataTypes } = require("sequelize");
const {sequelize} = require("../config/db");
const Club = require("./Club");
const User = require("./User");

const Recruitment = sequelize.define("Recruitment", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    clubId: {
        type: DataTypes.INTEGER,
        references: {
            model: Club,
            key: "id"
        }
    },
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: "id"
        }
    },
    status: {
        type: DataTypes.ENUM("pending", "approved", "rejected"),
        defaultValue: "pending"
    }
});

// Define Associations
User.belongsToMany(Club, { through: Recruitment });
Club.belongsToMany(User, { through: Recruitment });

module.exports = Recruitment;
