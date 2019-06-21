const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");
const Room = require("./Room");
const Movie_repertory = require("./Movie_Repertory");
const Combo = require("./Combo");

const Theater = sequelize.define("Theater", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    Fiscal_name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    Opening_time: {
        type: Sequelize.TIME,
        allowNull: false
    },
    Closing_time: {
        type: Sequelize.TIME,
        allowNull: false
    },
    Location: {
        type: Sequelize.STRING,
        allowNull: true
    },
  },
  {
      underscored: true
  }
);

Theater.hasMany(Room, {as: 'Rooms', foreignKey: 'Theater_id'});
Theater.hasMany(Movie_repertory, {as: 'Movie_repertories', foreignKey: 'Theater_id'});
Theater.hasMany(Combo, {as: 'Combos', foreignKey: 'Theater_id'});

Theater.sync();
module.exports = Theater;