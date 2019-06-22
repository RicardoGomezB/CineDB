const sequelize = require('sequelize');
const db = require('../config/database');
const Aisle = require('../models/Aisle');

const controller = {};

controller.Create = async function(data){
    try{
        console.log(data);
        Aisle.create(data);
    }catch (error){
        callback (null, error);
    }
};

controller.Get = async function(callback){
    try {
        let response = await Aisle.findAll({ 
        });
        let aisle = response.map(result => result.dataValues);
        callback(aisle, null);
        
    } catch (error) {
        callback(error, null);
    }
}

module.exports = controller;