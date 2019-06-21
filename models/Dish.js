const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");
const Combo = require("./Combo");

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

Dish.hasMany(Combo, {as: 'Combos', foreignKey: 'Dish_id'});

Dish.sync();
module.exports = Dish;