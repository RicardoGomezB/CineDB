const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");
const Theater = require("./Theater");
const Room_type = require("./Room_type");
const Technology_type = require("./Technology_type");

const Room = sequelize.define("Room", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    Exits: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Entrances: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Aisles: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
  },
  {
    underscored: true
  }
);

Theater.hasMany(Room, {as: 'Rooms', foreignKey: 'Theater_id'});
Room_type.hasMany(Room, {as: 'Rooms', foreignKey: 'Room_type_id'});
Technology_type.hasMany(Room, {as: 'Rooms', foreignKey: 'Technology_type_id'});

Room.sync();
module.exports = Room;