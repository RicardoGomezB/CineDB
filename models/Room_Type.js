const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");

const User = sequelize.define("Room_Type", {
    ROOM_TYPE_ID: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    DESCRIPTION: {
        type: Sequelize.STRING,
        allowNull: false,
    }
  });
  
  module.exports = Room_Type;