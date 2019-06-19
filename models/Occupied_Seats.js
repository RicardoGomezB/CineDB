const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");

const User = sequelize.define("Occupied_Seats", {
    //SEATS_ID
    //SCREENING_ID
  });
  
  module.exports = Occupied_Seats;