const sequelize = require('sequelize');
const db = require('../config/database');
const Entrance = require('../models/Entrance');

const controller = {};

controller.Create = async function(data){
    try{
        console.log(data);
        Entrance.create(data);
    }catch (error){
        callback (null, error);
    }
};

controller.Get = async function(callback){
    try {
        let response = await Entrance.findAll({ 
        });
        let entrance = response.map(result => result.dataValues);
        callback(entrance, null);
        
    } catch (error) {
        callback(error, null);
    }
}

module.exports = controller;