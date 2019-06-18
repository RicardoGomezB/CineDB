const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");

const User = sequelize.define("Room", {
    //THEATER_ID
    //TECHNOLOGY_TYPE_ID
    //ROOM_TYPE_ID
    ROOM_ID: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    EXITS: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    ENTRANCE: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    AISLE: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
  });
  
  module.exports = Room;