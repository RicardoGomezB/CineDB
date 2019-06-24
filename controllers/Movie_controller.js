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

controller.GetMovies = async function(callback){
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
        Description: data.Description,
        Title: data.Title,
        Duration: data.Duration,
        Release_date: data.Release_date,
        Genre_id: data.Genre_id
    },{
        where:{
            id: data.id
        }
    });
}

controller.DeleteMovie = async function (data){
    console.log(data);
    let response = Movie.destroy({
        where:{
            id: data.id
        }
    })
}

controller.GetMoviesByGenre = async function(data, callback){
    try {
        console.log(data);
        let response = Movie.findAll({ 
            where: {
                Genre_id: data.Genre_id
            }
        });
        let movie = response.map(result => result.dataValues);
        
        callback(movie, null);
    } catch (error) {
        callback(error, null);
    }
}

controller.GetMovieById = async function(data, callback){
    try {
        console.log(data);
        let response = Movie.findAll({ 
            where: {
                id: data.id
            }
        });
        let movie = response.map(result => result.dataValues);
        
        callback(movie, null);
    } catch (error) {
        callback(error, null);
    }
}
module.exports = controller;