const { DataTypes } = require("sequelize");
const {sequelize} = require("../config/db");

const Club = sequelize.define("Club", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    status: {
        type: DataTypes.ENUM("pending", "approved"),
        defaultValue: "pending"
    }
});

module.exports = Club;
