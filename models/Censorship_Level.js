const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");

const User = sequelize.define("Censorship_Level", {
    CENSORSHSIP_LEVEL_ID: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    DESCRIPTION: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    }
  });
  
  module.exports = Censorship_Level;