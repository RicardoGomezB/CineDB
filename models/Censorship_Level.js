const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");
const Movie_repertory = require("./Movie_Repertory")

const Censorship_level = sequelize.define("Censorship_level", {
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

Censorship_level.hasMany(Movie_repertory, {as: "Movie_repertories", foreignKey: "Censorship_level_id"});

Censorship_level.sync();
module.exports = Censorship_level;