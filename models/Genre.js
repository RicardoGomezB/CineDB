const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");

const User = sequelize.define("Genre", {
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
  });
  
  module.exports = Genre;