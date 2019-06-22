const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");
const Room = require("./Room");

const Seat = sequelize.define("Seat", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    }, 
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

Room.hasMany(Seat, {as: 'Seats', foreignKey: 'Room_id'});

Seat.sync();
module.exports = Seat;