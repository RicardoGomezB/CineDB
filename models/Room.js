const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");
const Room_in_maintenance = require("./Room_In_Maintenance");
const Screening = require("./Screening");
const Seat = require("./Seat");

const Room = sequelize.define("Room", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    // Theater_id: {
    //   type: Sequelize.INTEGER,
    //   allowNull: false,
    //   references: {
    //     model: THEATER,
    //     key: 'THEATER_ID'
    //   }
    // },
    // //TECHNOLOGY_TYPE_ID
    // TECHNOLOGY_TYPE_ID: {
    //   type: Sequelize.INTEGER,
    //   allowNull: false,
    //   references: {
    //     model: THEATER_TYPE,
    //     key: 'THEATER_TYPE_ID'
    //   }
    // },
    // //ROOM_TYPE_ID
    // ROOM_TYPE_ID: {
    //   type: Sequelize.INTEGER,
    //   allowNull: false,
    //   references: {
    //     model: ROOM_TYPE,
    //     key: 'ROOM_TYPE_ID'
    //   }
    // },
    Exits: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Entrances: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Aisles: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
  },
  {
    underscored: true
  }
);

Room.hasMany(Room_in_maintenance, {as: 'Rooms_in_maintenance', foreignKey: 'Room_id'});
Room.hasMany(Screening, {as: 'Screenings', foreignKey: 'Room_id'});
Room.hasMany(Seat, {as: 'Seats', foreignKey: 'Room_id'});

Room.sync();
module.exports = Room;