const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");
const Room = require("./Room");

const Aisle = sequelize.define("Aisle", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    Left: {
        type: Sequelize.TINYINT(1),
    },
    Right: {
        type: Sequelize.TINYINT(1),
    },
    Center: {
        type: Sequelize.TINYINT(1),
    }
  },
  {
    underscored: true
  }
);
  
Aisle.hasMany(Room, {as: 'Rooms', foreignKey: 'Room_id'});

Aisle.sync();
module.exports = Room;