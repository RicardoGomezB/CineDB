const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");

const Exit = sequelize.define("Exit", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    Left: {
        type: Sequelize.TINYINT(1),
        unique: 'Exit_combination_idx'
    },
    Right: {
        type: Sequelize.TINYINT(1),
        unique: 'Exit_combination_idx'
    },
    Center: {
        type: Sequelize.TINYINT(1),
        unique: 'Exit_combination_idx'
    }
  },
  {
    underscored: true
  }
);
  
Exit.sync();
module.exports = Exit;