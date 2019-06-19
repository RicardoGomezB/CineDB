const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");

const COMBO = sequelize.define("COMBO", {
    COMBO_ID: {
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
        fields: [COMBO_ID, DISH_ID, THEATER_ID]
      }
    ],
    underscored: true
  }
); 
  
module.exports = COMBO;