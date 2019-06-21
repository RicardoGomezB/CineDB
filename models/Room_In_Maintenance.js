const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");

const Room_in_maintenance = sequelize.define("Room_in_maintenance", {
    // ROOM_ID: {
    //   type: Sequelize.INTEGER,
    //   allowNull: false,
    //   references: {
    //     model: ROOM,
    //     key: 'ROOM_ID'
    //   }
    // },
  },
  {
    underscored: true
  }
);

Room_in_maintenance.sync();
module.exports = Room_in_maintenance;