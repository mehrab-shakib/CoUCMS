const { DataTypes } = require("sequelize");

const { sequelize } = require("../config/db");
const User = require("./User");
const Club = require("./Club");

const Member = sequelize.define("Member", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: "id",
    },
  },
  club_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Club,
      key: "id",
    },
  }, 
},{
  timestamps: false
});

//Define association between User and Member models
User.hasMany(Member, { foreignKey: "userId" });
Member.belongsTo(User, { foreignKey: "userId" });

//Define association between Club and Member models
Club.hasMany(Member, { foreignKey: "clubId" });
Member.belongsTo(Club, { foreignKey: "clubId" });

module.exports = Member;
