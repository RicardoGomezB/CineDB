const sequelize = require('sequelize');
const db = require('../config/database');
const Exit = require('../models/Exit');

const controller = {};

controller.Create = async function(data){
    try{
        console.log(data);
        Exit.create(data);
    }catch (error){
        callback (null, error);
    }
};

controller.Get = async function(callback){
    try {
        let response = await Exit.findAll({ 
        });
        let exit = response.map(result => result.dataValues);
        callback(exit, null);
        
    } catch (error) {
        callback(error, null);
    }
}

module.exports = controller;