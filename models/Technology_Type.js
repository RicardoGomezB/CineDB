const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");

const Technology_type = sequelize.define("Technology_type", {
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

Technology_type.sync();
module.exports = Technology_type;
