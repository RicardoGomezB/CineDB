const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");

const User = sequelize.define("Technology_Type", {
    TECHNOLOGY_TYPE_ID: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    DESCRIPTION: {
        type: Sequelize.STRING,
        allowNull: false,
    }
  });
  
<<<<<<< HEAD
  module.exports = THEATER;
=======
  module.exports = Technology_Type;
>>>>>>> 23c1bbeaec5c890abb4f3c3e786d79f024ab6c3f
