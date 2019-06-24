const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");
const Genre = require("./Genre");

const Movie = sequelize.define("Movie", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    Title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Duration: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Release_date: {
        type: Sequelize.DATEONLY,
        allowNull: true
    },
  },
  {
    underscored: true
  }
);

Genre.hasMany(Movie, {as: 'Movies', foreignKey: 'Genre_id'});

Movie.sync();
module.exports = Movie;