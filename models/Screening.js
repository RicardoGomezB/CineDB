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
        fields: ['Room_id', 'Screening_start_time', 'Date']
      }
    ]
  }
);

Movie_repertory.hasMany(Screening, {as: 'Screenings', foreignKey: 'Movie_repertory_id'});
Room.hasMany(Screening, {as: 'Screenings', foreignKey: 'Room_id'});

Screening.sync();
module.exports = Screening;