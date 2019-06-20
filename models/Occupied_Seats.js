const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");
const SEATS = require("./Seats");
const SCREENING = require("./Screening");


const OCCUPIED_SEATS = sequelize.define("OCCUPIED_SEATS", {
  SEAT_ID: {
    type: Sequelize.INTEGER,
    allowNull: false,
    unique: 'OCCUPIED_SEATS_INDEX',
    references: {
      model: SEATS,
      key: 'SEAT_ID'
    }
  },
  SCREENING_ID: {
    type: Sequelize.INTEGER,
    allowNull: false,
    unique: 'OCCUPIED_SEATS_INDEX',
    references: {
      model: SCREENING,
      key: 'SCREENING_ID'
    }
  }
},
  {
    underscored: true
  }
);

OCCUPIED_SEATS.sync();
module.exports = OCCUPIED_SEATS;