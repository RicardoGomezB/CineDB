const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");
const SCREENING = require("./Screening");
const MOVIE = require("./Movie");
const THEATER = require("./Theater");
const CENSORSHIP_LEVEL = require("./Censoship_Level");
const LANGUAGE = require("./Language");
const SUBTITLES = require("./Subtitles");


const MOVIE_REPERTORY = sequelize.define("MOVIE_REPERTORY", {
    //MOVIE_ID
    MOVIE_ID: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: MOVIE,
        key: 'MOVIE_ID'
      }
    },
    //THETER_ID
    TEATHER_ID: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: THEATER,
        key: 'THEATER_ID'
      }
    },
    //CENSORSHIP_LEVEL_ID
    CENSORSHIP_LEVEL_ID: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: CENSORSHIP_LEVEL,
        key: 'CENSORSHIP_LEVEL_ID'
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
    //SUBTITLE_LANGUAGE_ID
    SUBTITLE_LANGUAGE_ID: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: SUBTITLES,
        key: 'SUBTITLE_LANGUAGE_ID'
      }
    },
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
  },
  {
    indexes: [
      {
        unique: true,
        fields: [MOVIE_ID, THEATER_ID, LANGUAGE_ID, SUBTITLES_LANGUAGE_ID]     
      }
    ],
    underscored: true
  }
);

// MOVIE_REPERTORY.hasMany(SCREENING, {foreignKey: 'MOVIE_REPERTORY_ID'});

MOVIE_REPERTORY.sync();
module.exports = MOVIE_REPERTORY;