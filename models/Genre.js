const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");

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
  
GENRE.hasMany(MOVIE, {foreignKey: 'GENRE_ID'});

module.exports = GENRE;