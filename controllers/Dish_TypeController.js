const sequelize = require('sequelize');
const db = require('../config/database');
const Dish_Type = require('../models/Dish_Type');

const controller = {};

controller.CreateDish_Type = async function(data){
    try{
        console.log(data);
        Dish_Type.create(data);
    }catch (error){
        callback (null, error);
    }
};

controller.GetDish_Type = async function(callback){
    try {
        let response = await Dish_Type.findAll({ 
        });
        let Dish_Type = response.map(result => result.dataValues);
        callback(Dish_Type, null);
        
    } catch (error) {
        callback(error, null);
    }
}

controller.UpdateDish_Type = async function (data){
    let response = Dish_Type.update({
        DESCRIPTION: data.DESCRIPTION
    },{
        where:{
            DISH_TYPE_ID: data.DISH_TYPE_ID
        }
    });
}

controller.DeleteDish_Type = async function (data){
    console.log(data)
    let response = Dish_Type.destroy({
        where:{
            DISH_TYPE_ID: data.DISH_TYPE_ID
        }
    })
}
module.exports = controller;