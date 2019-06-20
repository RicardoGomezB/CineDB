const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");
const MOVIE_REPERTORY = require("./Movie_Repertory");
const ROOM = require("./Room");

const SCREENING = sequelize.define("SCREENING", {
    //MOVIE_REPERTORY_ID
    MOVIE_REPERTORY_ID: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: MOVIE_REPERTORY,
        key: 'MOVIE_REPERTORY_ID'
      }
    },
    //ROOM_ID
    ROOM_ID: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: ROOM,
        key: 'ROOM_ID'
      }
    },
    SCREENING_ID: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    SCREENING_START_TIME: {
        type: Sequelize.TIME,
        allowNull: false,
    },
    DATE: {
        type: Sequelize.DATE,
        allowNull: false
    }
  },
  {
    underscored: true,
    indexes: [
      {
        unique: true,
        fields: [ROOM_ID, SCREENING_START_TIME, DATE]
      }
    ]
  }
);

SCREENING.sync();
module.exports = SCREENING;