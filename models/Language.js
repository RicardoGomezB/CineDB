const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");
// const MOVIE_REPERTORY = require("./Movie_Repertory");
// const SUBTITLES = require("./Subtitles");

const LANGUAGE = sequelize.define("LANGUAGE", {
    LANGUAGE_ID: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    LANGUAGE: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    }
  },
  {
    underscored: true
  }
);

// LANGUAGE.hasMany(MOVIE_REPERTORY, {foreignKey: 'LANGUAGE_ID'});
// LANGUAGE.hasMany(SUBTITLES, {foreignKey: 'LANGUAGE_ID'});
  
module.exports = LANGUAGE;