const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");

const User = sequelize.define("Dish_Type", {
    DISH_TYPE_ID: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    DESCRIPTION: {
        type: Sequelize.STRING,
        allowNull: false,
    }
  });
  
  module.exports = Dish_Type;