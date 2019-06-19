const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");

const User = sequelize.define("Subtitles", {
    //MOVIE_ID
    //LANGUAGE_ID
  });
  
  module.exports = Subtitles;