const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");

const User = sequelize.define("Seats", {
    //ROOM_ID
    SEATS_ID: {       
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    ROW: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    COLUMN: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
  });
  
  module.exports = Seats;