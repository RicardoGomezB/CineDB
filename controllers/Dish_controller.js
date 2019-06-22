const sequelize = require('sequelize');
const db = require('../config/database');
const Dish = require('../models/Dish');

const controller = {};

controller.Create = async function(data){
    try{
        console.log(data);
        Dish.create(data);
    }catch (error){
        callback (null, error);
    }
};

controller.Get = async function(callback){
    try {
        let response = await Dish.findAll({ 
        });
        let dish = response.map(result => result.dataValues);
        callback(dish, null);
        
    } catch (error) {
        callback(error, null);
    }
}

controller.Update = async function (data){
    let response = Dish.update({
        Dish_type_id: data.Dish_type_id
    },{
        where:{
            id: data.id
        }
    });
}

controller.Delete = async function (data){
    console.log(data);
    let response = Dish.destroy({
        where:{
            id: data.id
        }
    })
}
module.exports = controller;