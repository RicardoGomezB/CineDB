const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");

const MOVIE_REPERTORY = sequelize.define("MOVIE_REPERTORY", {
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

MOVIE_REPERTORY.hasMany(SCREENING, {foreignKey: 'MOVIE_REPERTORY_ID'});

module.exports = MOVIE_REPERTORY;