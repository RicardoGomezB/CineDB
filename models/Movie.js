const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");
const Movie_repertory = require("./Movie_repertory");
const Subtitle = require("./Subtitle");

const Movie = sequelize.define("Movie", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
    //GENRE_ID
    // GENRE_ID: {
    //   type: Sequelize.INTEGER,
    //   allowNull: false,
    //   references: {
    //     model: GENRE,
    //     key: 'GENRE_ID'
    //   }
    // }
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

Movie.hasMany(Movie_repertory, {as: 'Movie_repertories', foreignKey: 'Movie_id'});
Movie.hasMany(Subtitle, {as: 'Subtitles', foreignKey: 'Movie_id'});

Movie.sync();
module.exports = Movie;