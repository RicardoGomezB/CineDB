const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");

const SCREENING = sequelize.define("SCREENING", {
    //MOVIE_REPERTORY_ID
    //ROOM_ID
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

SCREENING.hasMany(OCCUPIED_SEATS, {foreignKey: 'SCREENING_ID'});

module.exports = SCREENING;