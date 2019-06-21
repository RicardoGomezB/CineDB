const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");
const Movie_repertory = require("./Movie_Repertory");
const Subtitle = require("./Subtitle");

const Language = sequelize.define("Language", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    Language: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    }
  },
  {
    underscored: true
  }
);

Language.hasMany(Movie_repertory, {as: 'Movie_repertories', foreignKey: 'Language_id'});
Language.hasMany(Subtitle, {as: 'Subtitles', foreignKey: 'Language_id'});
  
module.exports = Language;