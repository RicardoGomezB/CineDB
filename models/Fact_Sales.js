const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");

const User = sequelize.define("Fact_Sales", {
    INVOICE_ID: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    PRODUCT_ID: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    MOVIE_ID: {
        type: Sequelize.INTEGER,
    },
    THETAER_ID: {
        type: Sequelize.INTEGER,
    },
    QUANTITY: {
        type: Sequelize.INTEGER,
    },
    WEEK: {
        type: Sequelize.STRING
    },
    DATE: {
        type: Sequelize.DATE,
        allowNull: false
    }
  });
  
  module.exports = Fact_Sales;