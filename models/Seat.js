const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");
const Occupied_seat = require("./Occupied_Seat");

const Seat = sequelize.define("Seat", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    }, 
    // ROOM_ID: {
    //   type: Sequelize.INTEGER,
    //   allowNull: false,
    //   references: {
    //     model: ROOM,
    //     key: 'ROOM_ID'
    //   }
    // },
    Row: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Column: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
  },
  {
    underscored: true
  }
);

Seat.hasMany(Occupied_seat, {as: 'Occupied_seats'});

Seat.sync();
module.exports = Seat;