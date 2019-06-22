const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");
const Theater = require("./Theater");
const Room_type = require("./Room_type");
const Technology_type = require("./Technology_type");
const Aisle = require("./Aisle");
const Exit = require("./Exit");
const Entrance = require("./Entrance");

const Room = sequelize.define("Room", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    }
  },
  {
    underscored: true
  }
);



Theater.hasMany(Room, {as: 'Rooms', foreignKey: 'Theater_id'});
Room_type.hasMany(Room, {as: 'Rooms', foreignKey: 'Room_type_id'});
Technology_type.hasMany(Room, {as: 'Rooms', foreignKey: 'Technology_type_id'});
Aisle.hasMany(Room, {as: 'Rooms', foreignKey: 'Aisle_id'});
Exit.hasMany(Room, {as: 'Rooms', foreignKey: 'Exit_id'});
Entrance.hasMany(Room, {as: 'Rooms', foreignKey: 'Entrance_id'});

Room.sync();
module.exports = Room;