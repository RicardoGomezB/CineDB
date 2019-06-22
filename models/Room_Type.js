const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");

const Room_type = sequelize.define("Room_type", {
    Description: {
        type: Sequelize.STRING,
        allowNull: false,
    }
  },
  {
    underscored: true
  }
);

Room_type.sync();
module.exports = Room_type;