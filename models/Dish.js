const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");
const COMBO = require("./Combo");


const DISH = sequelize.define("DISH", {
    DISH_ID: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    }
  },
  {
    underscored: true
  }
);

DISH.hasMany(COMBO, {foreignKey: 'DISH_ID'});

DISH.sync();
module.exports = DISH;