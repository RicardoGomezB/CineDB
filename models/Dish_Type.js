const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");
// const DISH = require("./Dish");


const DISH_TYPE = sequelize.define("DISH_TYPE", {
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
  },
  {
    underscored: true
  }
);

// DISH_TYPE.hasMany(DISH, {foreignKey: 'DISH_TYPE_ID'});

DISH_TYPE.sync();
module.exports = DISH_TYPE;