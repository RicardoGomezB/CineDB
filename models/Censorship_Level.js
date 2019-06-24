const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");

const Censorship_level = sequelize.define("Censorship_level", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    Description: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    }
  }, 
  {
    underscored: true
  }
);

Censorship_level.sync();
module.exports = Censorship_level;