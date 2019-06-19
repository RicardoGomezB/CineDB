const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");
const SEATS = require("./Seats");
const SCREENING = require("./Screening");

const OCCUPIED_SEATS = sequelize.define("OCCUPIED_SEATS", {
    //SEATS_ID
    //SCREENING_ID
  },
  {
    indexes: [
      {
        unique: true,
        fields: [SEAT_ID, SCREENING_ID]
      }
    ],
    underscored: true
  }
);

module.exports = OCCUPIED_SEATS;