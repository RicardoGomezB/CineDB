const sequelize = require('sequelize');
const db = require('../config/database');
const Dish = require('../models/Dish');

const controller = {};

controller.CreateDish = async function(data){
    try{
        console.log(data);
        Dish.create(data);
    }catch (error){
        callback (null, error);
    }
};

controller.GetDishes = async function(callback){
    try {
        let response = await Dish.findAll({ 
        });
        let dish = response.map(result => result.dataValues);
        callback(dish, null);
        
    } catch (error) {
        callback(error, null);
    }
}

controller.UpdateDish = async function (data){
    let response = Dish.update({
        Dish_type_id: data.Dish_type_id,
        description: data.description
    },{
        where:{
            id: data.id
        }
    });
}

controller.DeleteDish = async function (data){
    console.log(data);
    let response = Dish.destroy({
        where:{
            id: data.id
        }
    })
}
module.exports = controller;