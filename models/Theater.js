const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");

const User = sequelize.define("Theater", {
    THEATER_ID: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    FISCAL_NAME: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    OPENING_TIME: {
        type: Sequelize.TIME,
        allowNull: false
    },
    CLOSING_TIME: {
        type: Sequelize.TIME,
        allowNull: false
    },
    LOCATION: {
        type: Sequelize.STRING,
        allowNull: true
    },
  });
  
  module.exports = Theater;