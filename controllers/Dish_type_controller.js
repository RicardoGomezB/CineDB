const sequelize = require('sequelize');
const db = require('../config/database');
const Dish_type = require('../models/Dish_type');

const controller = {};

controller.CreateDishType = async function(data){
    try{
        console.log(data);
        Dish_type.create(data);
    }catch (error){
        callback (null, error);
    }
};

controller.GetDishTypes = async function(callback){
    try {
        let response = await Dish_type.findAll({ 
        });
        let dish_type = response.map(result => result.dataValues);
        callback(dish_type, null);
        
    } catch (error) {
        callback(error, null);
    }
}

controller.UpdateDishType = async function (data){
    let response = Dish_type.update({
        Description: data.Description
    },{
        where:{
            id: data.id
        }
    });
}

controller.DeleteDishType = async function (data){
    console.log(data);
    let response = Dish_type.destroy({
        where:{
            id: data.id
        }
    })
}
module.exports = controller;