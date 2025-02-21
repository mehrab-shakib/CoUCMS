const mysql = require("mysql2");
const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");

dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: "mysql",
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

pool.getConnection((err, connection) => {
  if (err) console.error("Database connection failed:", err);
  else console.log("Connected to MySQL");
  if (connection) connection.release();
});

module.exports = { sequelize, pool: pool.promise() };