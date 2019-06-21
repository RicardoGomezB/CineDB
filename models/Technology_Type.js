const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");
const Room = require("./Room");

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

Technology_type.hasMany(Room, {as: 'Rooms', foreignKey: 'Technology_type_id'});

Technology_type.sync();
module.exports = Technology_type;