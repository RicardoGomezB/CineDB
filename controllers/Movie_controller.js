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
        Description: data.Description,
        Title: data.Title,
        Duration: data.Duration,
        Release_date: data.Release_date
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
module.exports = controller;