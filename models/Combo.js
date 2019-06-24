const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");
const Dish = require("./Dish");
const Theater = require("./Theater");

const Combo = sequelize.define("Combo", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    }
  },
  {
    indexes: [
      {
        unique: true,
        fields: ['id', 'Dish_id', 'Theater_id']
      }
    ],
    underscored: true
  }
);
  
Dish.hasMany(Combo, {as: 'Combos', foreignKey: 'Dish_id'});
Theater.hasMany(Combo, {as: 'Combos', foreignKey: 'Theater_id'});

Combo.sync();
module.exports = Combo;