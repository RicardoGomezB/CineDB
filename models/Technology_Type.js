const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");
// const ROOM = require("./Room");

const TECHNOLOGY_TYPE = sequelize.define("TECHNOLOGY_TYPE", {
    TECHNOLOGY_TYPE_ID: {
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

// TECHNOLOGY_TYPE.hasMany(ROOM, {foreignKey: 'TECHNOLOGY_TYPE_ID'})

TECHNOLOGY_TYPE.sync();
module.exports = TECHNOLOGY_TYPE;