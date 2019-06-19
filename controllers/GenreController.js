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

controller.GetGenre = async function(callback){
    try {
        let response = await Genre.findAll({ 
        });
        let Genre = response.map(result => result.dataValues);
        callback(Genre, null);
        
    } catch (error) {
        callback(error, null);
    }
}

controller.UpdateGenre = async function (data){
    let response = Genre.update({
        Genre: data.Genre
    },{
        where:{
            Genre_ID: data.Genre_ID
        }
    });
}

controller.DeleteGenre = async function (data){
    console.log(data)
    let response = Genre.destroy({
        where:{
            Genre_ID: data.Genre_ID
        }
    })
}
module.exports = controller;