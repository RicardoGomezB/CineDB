const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");
const ROOM = require("./Room");

const ENTRANCE = sequelize.define("ENTRANCE", {
    ENTRANCE_ID: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    LEFT: {
        type: Sequelize.TINYINT(1),
    },
    RIGHT: {
        type: Sequelize.TINYINT(1),
    }
  },
  {
    underscored: true
  }
);
  
ENTRANCE.hasMany(ROOM, {foreignKey: 'ENTRANCE_ID'});

ENTRANCE.sync();
module.exports = ENTRANCE;