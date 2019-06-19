const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");

const User = sequelize.define("Movie", {
    //GENRE_ID
    Movie_ID: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    TITLE: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    DESCRIPTION: {
        type: Sequelize.STRING,
        allowNull: false
    },
    DURATION: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    RELEASE_DATE: {
        type: Sequelize.DATE,
        allowNull: true
    },
  });
  
  module.exports = Movie;