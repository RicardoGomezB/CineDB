const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");

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
        fields: [id, Dish_id, Theater_id]
      }
    ],
    underscored: true
  }
);
  
Combo.sync();
module.exports = Combo;