const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");

const User = sequelize.define("Combo", {
    //DISH_ID
    //THETER_ID
    COMBO_ID: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    }
  });
  
  module.exports = Combo;