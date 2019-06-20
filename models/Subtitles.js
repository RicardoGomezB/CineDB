const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");
const MOVIE = require("./Movie");
const LANGUAGE = require("./Language");
// const MOVIE_REPERTORY = require("./Movie_Repertory");

const SUBTITLES = sequelize.define("SUBTITLES", {
    //MOVIE_ID
    MOVIE_ID: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: MOVIE,
        key: 'MOVIE_ID'
      }
    },
    //LANGUAGE_ID
    LANGUAGE_ID: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: LANGUAGE,
        key: 'LANGUAGE_ID'
      }
    },
  },
  {
    underscored: true,
    indexes: [
      {
        unique: true,
        fields: [MOVIE_ID, LANGUAGE_ID]
      }
    ]
  }
);

// SUBTITLES.hasMany(MOVIE_REPERTORY, {foreignKey: 'SUBTITLES_LANGUAGE_ID'});

SUBTITLES.sync();
module.exports = SUBTITLES;