const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");

<<<<<<< HEAD
const User = sequelize.define("Movie", {
=======
const Movie = sequelize.define("Movie", {
>>>>>>> 23c1bbeaec5c890abb4f3c3e786d79f024ab6c3f
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