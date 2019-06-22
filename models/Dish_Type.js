const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");

const Dish_type = sequelize.define("Dish_type", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    Description: {
        type: Sequelize.STRING,
        allowNull: false,
    }
  },
  {
    underscored: true
  }
);

Dish_type.sync();
module.exports = Dish_type;