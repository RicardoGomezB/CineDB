const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");
const Room = require("./Room");

const Room_in_maintenance = sequelize.define("Room_in_maintenance", {
    
  },
  {
    underscored: true
  }
);

Room.hasMany(Room_in_maintenance, {as: 'Rooms_in_maintenance', foreignKey: 'Room_id'})

Room_in_maintenance.sync();
module.exports = Room_in_maintenance;