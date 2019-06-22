const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");
<<<<<<< HEAD
const MOVIE_REPERTORY = require("../models/Movie_Repertory")



const MOVIE = sequelize.define("MOVIE", {


    //GENRE_ID
    MOVIE_ID: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
=======
const Genre = require("./Genre");

const Movie = sequelize.define("Movie", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
>>>>>>> 6ab42387c45f9d0f4374d693deaabd8d67cd385b
    },
    Title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Duration: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Release_date: {
        type: Sequelize.DATE,
        allowNull: true
    },
  },
  {
    underscored: true
  }
);

Genre.hasMany(Movie, {as: 'Movies', foreignKey: 'Genre_id'});

Movie.sync();
module.exports = Movie;