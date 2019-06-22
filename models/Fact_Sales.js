const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");

const Fact_sale = sequelize.define("Fact_sales", {
    Product_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    Movie_id: {
        type: Sequelize.INTEGER,
    },
    Theater_id: {
        type: Sequelize.INTEGER,
    },
    Quantity: {
        type: Sequelize.INTEGER,
    },
    Week: {
        type: Sequelize.STRING
    },
    Date: {
        type: Sequelize.DATE,
        allowNull: false
    }
  },
  {
      underscored: true
  }
);

Fact_sale.sync();
module.exports = Fact_sale;