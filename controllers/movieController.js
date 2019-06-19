const sequelize = require('sequelize');
const db = require('../config/database');
const Movie = require('../models/Movie');

const controller = {};

controller.CreateMovie = async function(data){
    try{
        console.log(data);
        Movie.create(data);
    }catch (error){
        callback (null, error);
    }
};

controller.GetMovie = async function(callback){
    try {
        let response = await Movie.findAll({ 
        });
        let movie = response.map(result => result.dataValues);
        callback(movie, null);
        
    } catch (error) {
        callback(error, null);
    }
}

controller.UpdateMovie = async function (data){
    let response = Movie.update({
        DESCRIPTION: data.DESCRIPTION,
        Movie_ID: data.Movie_ID,
        DURATION: data.DURATION,
        RELEASE_DATE: data.RELEASE_DATE
    },{
        where:{
            titulo: data.TITLE
        }
    });
}

controller.DeleteMovie = async function (data){
    console.log(data)
    let response = Movie.destroy({
        where:{
            TITLE: data.TITLE
        }
    })
}
module.exports = controller;