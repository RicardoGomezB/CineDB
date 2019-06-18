const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");

const User = sequelize.define("Screening", {
    //MOVIE_REPERTORY_ID
    //ROOM_ID
    SCREENING_ID: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    SCREENING_START_TIME: {
        type: Sequelize.TIME,
        allowNull: false,
    },
    DATE: {
        type: Sequelize.DATE,
        allowNull: false
    }
  });
  
  module.exports = Screening;