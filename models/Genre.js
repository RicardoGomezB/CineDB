const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");
// const MOVIE = require("./Movie");

const GENRE = sequelize.define("GENRE", {
    GENRE_ID: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    GENRE: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    }
  },
  {
    underscored: true
  }
);
  
// GENRE.hasMany(MOVIE, {foreignKey: 'GENRE_ID'});

GENRE.sync();
module.exports = GENRE;