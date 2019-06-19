const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");

const ROOM_TYPE = sequelize.define("ROOM_TYPE", {
    ROOM_TYPE_ID: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    DESCRIPTION: {
        type: Sequelize.STRING,
        allowNull: false,
    }
  },
  {
    underscored: true
  }
);

ROOM_TYPE.hasMany(ROOM, {foreignKey: 'ROOM_TYPE_ID'});

module.exports = ROOM_TYPE;