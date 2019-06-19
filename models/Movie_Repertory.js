const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");

const User = sequelize.define("Movie_Repertory", {
    //MOVIE_ID
    //THETER_ID
    //CENSORSHIP_LEVEL_ID
    //LANGUAGE_ID
    //SUBTITLE_LANGUAGE_ID

    MOVIE_REPERTORY_ID: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    START_DATE: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    END_DATE: {
        type: Sequelize.DATE,
        allowNull: false
    }
  });
  
  module.exports = Movie_Repertory;