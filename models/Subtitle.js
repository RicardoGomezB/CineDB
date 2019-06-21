const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");
const Movie_repertory = require("./Movie_repertory");

const Subtitle = sequelize.define("Subtitles", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    // MOVIE_ID: {
    //   type: Sequelize.INTEGER,
    //   allowNull: false,
    //   references: {
    //     model: MOVIE,
    //     key: 'MOVIE_ID'
    //   }
    // },
    // //LANGUAGE_ID
    // LANGUAGE_ID: {
    //   type: Sequelize.INTEGER,
    //   allowNull: false,
    //   references: {
    //     model: LANGUAGE,
    //     key: 'LANGUAGE_ID'
    //   }
    // },
  },
  {
    underscored: true,
    indexes: [
      {
        unique: true,
        fields: [Movie_id, Language_id]
      }
    ]
  }
);

Subtitle.hasMany(Movie_repertory, {as: 'Subtitles', foreignKey: 'Subtitle_id'});

Subtitle.sync();
module.exports = Subtitle;