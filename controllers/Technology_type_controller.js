const sequelize = require('sequelize');
const db = require('../config/database');
const Technology_type = require('../models/Technology_type');

const controller = {};

controller.CreateTechnologyType = async function(data){
    try{
        console.log(data);
        Technology_type.create(data);
    }catch (error){
        callback (null, error);
    }
};

controller.GetTechnologyTypes = async function(callback){
    try {
        let response = await Technology_type.findAll({ 
        });
        let technology_type = response.map(result => result.dataValues);
        callback(technology_type, null);
        
    } catch (error) {
        callback(error, null);
    }
}

controller.UpdateTechnologyType = async function (data){
    let response = Technology_type.update({
        Description: data.Description,
    },{
        where:{
            id: data.id
        }
    });
}

controller.DeleteTechnologyType = async function (data){
    console.log(data);
    let response = Technology_type.destroy({
        where:{
            id: data.id
        }
    })
}

module.exports = controller;