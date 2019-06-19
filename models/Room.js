const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");
const ROOM_IN_MAINTENANCE = require("./Room_In_Maintenance");
const SCREENING = require("./Screening");
const SEATS = require("./Seats");

const ROOM = sequelize.define("ROOM", {
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
  },
  {
    underscored: true
  }
);

ROOM.hasMany(ROOM_IN_MAINTENANCE, {foreignKey: 'ROOM_ID'});
ROOM.hasMany(SCREENING, {foreignKey: 'ROOM_ID'});
ROOM.hasMany(SEATS, {foreignKey: 'ROOM_ID'});

module.exports = ROOM;