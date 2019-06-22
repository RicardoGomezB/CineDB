const sequelize = require('sequelize');
const db = require('../config/database');
const Movie_repertory = require('../models/Movie_repertory');

const controller = {};

controller.Create = async function(data){
    try{
        console.log(data);
        Movie_repertory.create(data);
    }catch (error){
        callback (null, error);
    }
};

controller.Get = async function(callback){
    try {
        let response = await Movie_repertory.findAll({ 
        });
        let movie_repertory = response.map(result => result.dataValues);
        callback(movie_repertory, null);
        
    } catch (error) {
        callback(error, null);
    }
}

controller.Update = async function (data){
    let response = Movie_repertory.update({
        Movie_id: data.Movie_id,
        Theater_id: data.Theater_id,
        Censorship_level_id: data.Censorship_level_id,
        Language_id: data.Language_id,
        Subtitle_id: data.Subtitle_id,
        Start_date: data.Start_date,
        End_date: data.End_date
    },{
        where:{
            id: data.id
        }
    });
}

controller.Delete = async function (data){
    console.log(data);
    let response = Movie_repertory.destroy({
        where:{
            id: data.id
        }
    })
}
module.exports = controller;