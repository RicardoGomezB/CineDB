const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");
const OCCUPIED_SEATS = require("./Occupied_Seats");

const SEATS = sequelize.define("SEATS", {
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
  },
  {
    underscored: true
  }
);

SEATS.hasMany(OCCUPIED_SEATS, {foreignKey: 'SEAT_ID'})

module.exports = SEATS;