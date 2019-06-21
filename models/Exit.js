const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");
const Room = require("./Room");

const Exit = sequelize.define("Exit", {
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
  
Exit.hasMany(Room, {as: 'Rooms', foreignKey: 'Exit_id'});

Exit.sync();
module.exports = Exit;