const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");

const Genre = sequelize.define("Genre", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    Genre: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    }
  },
  {
    underscored: true
  }
);
  
Genre.sync();
module.exports = Genre;