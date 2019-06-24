const sequelize = require('sequelize');
const db = require('../config/database');
const Censorship_level = require('../models/Censorship_level');

const controller = {};

controller.CreateCensorshipLevel = async function(data){
    try{
        console.log(data);
        Censorship_level.create(data);
    }catch (error){
        callback (null, error);
    }
};

controller.GetCensorshipLevels = async function(callback){
    try {
        let response = await Movie.findAll({ 
        });
        let censorship_level = response.map(result => result.dataValues);
        callback(censorship_level, null);
        
    } catch (error) {
        callback(error, null);
    }
}

controller.UpdateCensorshipLevel = async function (data){
    let response = Movie.update({
        Description: data.Description,
    },{
        where:{
            id: data.id
        }
    });
}

controller.DeleteCensorshipLevel = async function (data){
    console.log(data);
    let response = Censorship_level.destroy({
        where:{
            id: data.id
        }
    })
}
module.exports = controller;