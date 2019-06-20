const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");
const ROOM = require("./Room");

const AISLE = sequelize.define("AISLE", {
    AISLE_ID: {
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
    },
    CENTER: {
        type: Sequelize.TINYINT(1),
    }
  },
  {
    underscored: true
  }
);
  
AISLE.hasMany(ROOM, {foreignKey: 'AISLE_ID'});

AISLE.sync();
module.exports = AISLE;