const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");

const Aisle = sequelize.define("Aisle", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    Left: {
        type: Sequelize.TINYINT(1),
    },
    Right: {
        type: Sequelize.TINYINT(1),
    },
    Center: {
        type: Sequelize.TINYINT(1),
    }
  },
  {
    underscored: true
  }
);

Aisle.sync();
module.exports = Room;