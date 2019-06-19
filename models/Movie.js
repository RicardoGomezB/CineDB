const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");

<<<<<<< HEAD
<<<<<<< HEAD
const Movie = sequelize.define("Movie", {
=======
const MOVIE = sequelize.define("MOVIE", {
>>>>>>> 1f3788919f3691f227be3fc7ccd4b8706e03ea1f
=======
const MOVIE = sequelize.define("MOVIE", {
>>>>>>> 576220b9a205ea65c45a7f6c824d408521d0188a
    //GENRE_ID
    MOVIE_ID: {
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
  },
  {
    underscored: true
  }
);

MOVIE.hasMany(MOVIE_REPERTORY, {foreignKey: 'MOVIE_ID'});
MOVIE.hasMany(SUBTITLES, {foreignKey: 'MOVIE_ID'});

module.exports = MOVIE;