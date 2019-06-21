const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");
const Room = require("./Room");

const Entrance = sequelize.define("Entrance", {
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
    }
  },
  {
    underscored: true
  }
);
  
Entrance.hasMany(Room, {as: 'Rooms', foreignKey: 'Entrance_id'});

Entrance.sync();
module.exports = Entrance;