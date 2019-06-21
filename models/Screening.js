const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");
const Movie_repertory = require("./Movie_Repertory");
const Room = require("./Room");

const Screening = sequelize.define("Screening", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    //MOVIE_REPERTORY_ID
    // MOVIE_REPERTORY_ID: {
    //   type: Sequelize.INTEGER,
    //   allowNull: false,
    //   references: {
    //     model: MOVIE_REPERTORY,
    //     key: 'MOVIE_REPERTORY_ID'
    //   }
    // },
    // //ROOM_ID
    // ROOM_ID: {
    //   type: Sequelize.INTEGER,
    //   allowNull: false,
    //   references: {
    //     model: ROOM,
    //     key: 'ROOM_ID'
    //   }
    // },
    Screening_start_time: {
        type: Sequelize.TIME,
        allowNull: false,
    },
    Date: {
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

Screening.hasMany(Occupied_seat, {as: 'Occupied_seats'});

Screening.sync();
module.exports = Screening;