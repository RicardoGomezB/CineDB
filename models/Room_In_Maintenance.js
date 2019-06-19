const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");

const ROOM_IN_MAINTENANCE = sequelize.define("ROOM_IN_MAINTENANCE", {
    //ROOM_ID
  },
  {
    underscored: true
  }
);

module.exports = ROOM_IN_MAINTENANCE;