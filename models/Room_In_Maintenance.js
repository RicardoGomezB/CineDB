const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");
const ROOM = require("./Room");

const ROOM_IN_MAINTENANCE = sequelize.define("ROOM_IN_MAINTENANCE", {
    //ROOM_ID
    ROOM_ID: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: ROOM,
        key: 'ROOM_ID'
      }
    },
  },
  {
    underscored: true
  }
);

ROOM_IN_MAINTENANCE.sync();
module.exports = ROOM_IN_MAINTENANCE;