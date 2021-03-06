const sequelize = require('sequelize');
const db = require('../config/database');
const Genre = require('../models/Genre');

const controller = {};

controller.CreateGenre = async function(data){
    try{
        console.log(data);
        Genre.create(data);
    }catch (error){
        callback (null, error);
    }
};

controller.GetGenres = async function(callback){
    try {
        let response = await Genre.findAll({ 
        });
        let genre = response.map(result => result.dataValues);
        callback(genre, null);
        
    } catch (error) {
        callback(error, null);
    }
}

controller.UpdateGenre = async function (data){
    let response = Genre.update({
        Genre: data.Genre
    },{
        where:{
            id: data.id
        }
    });
}

controller.DeleteGenre = async function (data){
    console.log(data);
    let response = Genre.destroy({
        where:{
            id: data.id
        }
    })
}
module.exports = controller;