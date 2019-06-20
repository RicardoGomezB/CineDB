const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");
const THEATER = require("./Theater");
const THEATER_TYPE = require("./Theater_type");
const ROOM_TYPE = require("./Room_Type");

const ROOM = sequelize.define("ROOM", {
    //THEATER_ID
    TEATHER_ID: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: THEATER,
        key: 'THEATER_ID'
      }
    },
    //TECHNOLOGY_TYPE_ID
    TECHNOLOGY_TYPE_ID: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: THEATER_TYPE,
        key: 'THEATER_TYPE_ID'
      }
    },
    //ROOM_TYPE_ID
    ROOM_TYPE_ID: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: ROOM_TYPE,
        key: 'ROOM_TYPE_ID'
      }
    },
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

// ROOM.hasMany(ROOM_IN_MAINTENANCE, {foreignKey: 'ROOM_ID'});
// ROOM.hasMany(SCREENING, {foreignKey: 'ROOM_ID'});
// ROOM.hasMany(SEATS, {foreignKey: 'ROOM_ID'});

ROOM.sync();
module.exports = ROOM;