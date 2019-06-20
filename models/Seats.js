const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");
const ROOM = require("./Room");

const SEATS = sequelize.define("SEATS", {
    //ROOM_ID
    ROOM_ID: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: ROOM,
        key: 'ROOM_ID'
      }
    },
    SEAT_ID: {       
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
  },
  {
    underscored: true
  }
);

SEATS.sync();
module.exports = SEATS;