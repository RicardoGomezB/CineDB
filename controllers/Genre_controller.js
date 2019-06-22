const sequelize = require('sequelize');
const db = require('../config/database');
const Genre = require('../models/Genre');

const controller = {};

controller.Create = async function(data){
    try{
        console.log(data);
        Genre.create(data);
    }catch (error){
        callback (null, error);
    }
};

controller.Get = async function(callback){
    try {
        let response = await Genre.findAll({ 
        });
        let genre = response.map(result => result.dataValues);
        callback(genre, null);
        
    } catch (error) {
        callback(error, null);
    }
}

controller.Update = async function (data){
    let response = Genre.update({
        Genre: data.Genre
    },{
        where:{
            id: data.id
        }
    });
}

controller.Delete = async function (data){
    console.log(data);
    let response = Genre.destroy({
        where:{
            id: data.id
        }
    })
}
module.exports = controller;