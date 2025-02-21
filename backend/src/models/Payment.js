const { DataTypes } = require("sequelize");
const {sequelize} = require("../config/db");
const User = require("./User");

const Payment = sequelize.define("Payment", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: "id"
        }
    },
    amount: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM("pending", "completed"),
        defaultValue: "pending"
    }
});

module.exports = Payment;
