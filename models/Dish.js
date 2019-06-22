const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");
const Dish_type = require("./Dish_type");

const Dish = sequelize.define("Dish", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    }
  //Dish_type_id
  },
  {
    underscored: true
  }
);

Dish_type.hasMany(Dish, {as: 'Dishes', foreignKey: 'Dish_type_id'});

Dish.sync();
module.exports = Dish;