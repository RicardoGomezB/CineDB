const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");

const CENSORSHSIP_LEVEL = sequelize.define("CENSORSHSIP_LEVEL", {
    CENSORSHSIP_LEVEL_ID: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    DESCRIPTION: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },

  }, 
  {
    indexes: [
      {
        unique: true,
        fields: [DESCRIPTION]
      }
    ],
    underscored: true
  }
);
module.exports = CENSORSHSIP_LEVEL;