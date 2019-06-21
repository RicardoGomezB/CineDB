const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");
const Screening = require("./Screening");
const Movie = require("./Movie");
const Theater = require("./Theater");
const Language = require("./Language");
const Subtitle = require("./Subtitle");

const Movie_repertory = sequelize.define("Movie_repertory", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    Movie_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: Movie,
        key: 'id'
      }
    },
    //THETER_ID
    Theater_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: Theater,
        key: 'id'
      }
    },
    //CENSORSHIP_LEVEL_ID
    // CENSORSHIP_LEVEL_ID: {
    //   type: Sequelize.INTEGER,
    //   allowNull: false,
    //   references: {
    //     model: CENSORSHIP_LEVEL,
    //     key: 'CENSORSHIP_LEVEL_ID'
    //   }
    // },
    //LANGUAGE_ID
    Language_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: Language,
        key: 'id'
      }
    },
    //SUBTITLE_LANGUAGE_ID
    Subtitle_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: Subtitle,
        key: 'id'
      }
    },
    Start_date: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    End_date: {
        type: Sequelize.DATE,
        allowNull: false
    }
  },
  {
    indexes: [
      {
        unique: true,
        fields: [Movie_id, Theater_id, Language_id, Subtitle_id]     
      }
    ],
    underscored: true
  }
);

Movie_repertory.hasMany(Screening, {foreignKey: 'Movie_repertory_id'});

Movie_repertory.sync();
module.exports = Movie_repertory;