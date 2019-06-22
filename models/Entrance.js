const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");

const Entrance = sequelize.define("Entrance", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    Left: {
        type: Sequelize.TINYINT(1),
        unique: 'Entrance_combination_idx'
    },
    Right: {
        type: Sequelize.TINYINT(1),
        unique: 'Entrance_combination_idx'
    }
  },
  {
    underscored: true
  }
);
  
Entrance.sync();
module.exports = Entrance;