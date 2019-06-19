const sequelize = require('sequelize');
const db = require('../config/database');
const Technology_Type = require('../models/Technology_Type');

const controller = {};

controller.CreateTechnology_Type = async function(data){
    try{
        console.log(data);
        Technology_Type.create(data);
    }catch (error){
        callback (null, error);
    }
};

controller.GetTechnology_Type = async function(callback){
    try {
        let response = await Technology_Type.findAll({ 
        });
        let Technology_Type = response.map(result => result.dataValues);
        callback(Technology_Type, null);
        
    } catch (error) {
        callback(error, null);
    }
}

controller.UpdateTechnology_Type = async function (data){
    let response = Technology_Type.update({
        DESCRIPTION: data.DESCRIPTION

    },{
        where:{
            TECHNOLOGY_TYPE_ID: data.Technology_Type
        }
    });
}

controller.DeleteTechnology_Type = async function (data){
    console.log(data)
    let response = Technology_Type.destroy({
        where:{
            TECHNOLOGY_TYPE_ID: data.Technology_Type
        }
    })
}
module.exports = controller;