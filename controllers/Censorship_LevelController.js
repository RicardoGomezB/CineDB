const sequelize = require('sequelize');
const db = require('../config/database');
const Censorship_Level = require('../models/Censorship_Level');

const controller = {};

controller.CreateCensorship_Level = async function(data){
    try{
        console.log(data);
        Censorship_Level.create(data);
    }catch (error){
        callback (null, error);
    }
};

controller.GetCensorship_Level = async function(callback){
    try {
        let response = await Censorship_Level.findAll({ 
        });
        let Censorship_Level = response.map(result => result.dataValues);
        callback(Censorship_Level, null);
        
    } catch (error) {
        callback(error, null);
    }
}

controller.UpdateDish_Type = async function (data){
    let response = Dish_Type.update({
        DESCRIPTION: data.DESCRIPTION
    },{
        where:{
            CENSORSHSIP_LEVEL_ID: data.CENSORSHSIP_LEVEL_ID
        }
    });
}

controller.DeleteDish_Type = async function (data){
    console.log(data)
    let response = Dish_Type.destroy({
        where:{
            CENSORSHSIP_LEVEL_ID: data.CENSORSHSIP_LEVEL_ID
        }
    })
}
module.exports = controller;