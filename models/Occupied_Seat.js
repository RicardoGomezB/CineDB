const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");
const Seat = require("./Seat");
const Screening = require("./Screening");

const Occupied_seat = sequelize.define("Occupied_seat", {
    Seat_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      unique: 'Occupied_seat_idx',
      references: {
        model: Seat,
        key: 'id'
      }
    },
    Screening_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      unique: 'Occupied_seat_idx',
      references: {
        model: Screening,
        key: 'id'
      }
    }
  },
  {
    underscored: true,
    indexes: [
      {
        unique: true,
        fields: ['Screening_id', 'Seat_id']
      }
    ]
  }
);

Seat.hasMany(Occupied_seat, {as: 'Occupied_seats', foreignKey: 'Seat_id'});
Screening.hasMany(Occupied_seat, {as: 'Occupied_seats', foreignKey: 'Screening_id'});

Occupied_seat.sync();
module.exports = Occupied_seat;