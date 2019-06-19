const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");

const MOVIE = sequelize.define("MOVIE", {
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
  },
  {
    underscored: true
  }
);

MOVIE.hasMany(MOVIE_REPERTORY, {foreignKey: 'MOVIE_ID'});
MOVIE.hasMany(SUBTITLES, {foreignKey: 'MOVIE_ID'});

module.exports = MOVIE;