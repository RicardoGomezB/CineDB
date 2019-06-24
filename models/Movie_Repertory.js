const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");
const Subtitle = require("./Subtitle");
const Language = require("./Language");
const Theater = require("./Theater");
const Censorship_level = require("./Censorship_level");
const Movie = require("./Movie");

const Movie_repertory = sequelize.define("Movie_repertory", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    Start_date: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    End_date: {
        type: Sequelize.DATE,
        allowNull: false
    }
  },
  {
    underscored: true,
    indexes: [
      {
        unique: true,
        name: 'Movie_repertory_combination_idx',
        fields: ['Movie_id', 'Theater_id', 'Language_id', 'Subtitle_id']     
      }
    ]
  }
);

Movie.hasMany(Movie_repertory, {as: 'Movie_repertories', foreignKey: 'Movie_id'});
Theater.hasMany(Movie_repertory, {as: 'Movie_repertories', foreignKey: 'Theater_id'});
Subtitle.hasMany(Movie_repertory, {as: 'Movie_repertories', foreignKey: 'Subtitle_id'});
Language.hasMany(Movie_repertory, {as: 'Movie_repertories', foreignKey: 'Language_id'});
Censorship_level.hasMany(Movie_repertory, {as: 'Movie_repertories', foreignKey: 'Censorship_level_id'});

Movie_repertory.sync();
module.exports = Movie_repertory;