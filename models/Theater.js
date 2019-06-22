const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");

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

Theater.sync();
module.exports = Theater;