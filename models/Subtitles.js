const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");

const SUBTITLES = sequelize.define("SUBTITLES", {
    //MOVIE_ID
    //LANGUAGE_ID
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

SUBTITLES.hasMany(MOVIE_REPOSITORY, {foreignKey: 'SUBTITLES_LANGUAGE_ID'});

module.exports = SUBTITLES;