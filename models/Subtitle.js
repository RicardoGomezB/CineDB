const Sequelize = require("sequelize");
Sequelize.Promise = global.Promise;
const sequelize = require("../config/database");
const Movie = require("./Movie");
const Language = require("./Language");

const Subtitle = sequelize.define("Subtitle", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
  },
  {
    underscored: true,
    indexes: [
      {
        unique: true,
        fields: ['Movie_id', 'Language_id']
      }
    ]
  }
);

Language.hasMany(Subtitle, {as: 'Subtitles', foreignKey: 'Language_id'});
Movie.hasMany(Subtitle, {as: 'Subtitles', foreignKey: 'Movie_id'});

Subtitle.sync();
module.exports = Subtitle;