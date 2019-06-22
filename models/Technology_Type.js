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
      unique: true
    }
<<<<<<< HEAD
  });
  
  module.exports = Technology_Type;
=======
  },
  {
    underscored: true
  }
);

Technology_type.sync();
module.exports = Technology_type;
>>>>>>> 6ab42387c45f9d0f4374d693deaabd8d67cd385b
