const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");

const EXIT = sequelize.define("EXIT", {
    EXIT_ID: {
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
  
EXIT.hasMany(ROOM, {foreignKey: 'EXIT_ID'});

module.exports = EXIT;