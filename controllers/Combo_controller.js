const sequelize = require('sequelize');
const db = require('../config/database');
const Combo = require('../models/Combo');

const controller = {};

controller.Create = async function(data){
    try{
        console.log(data);
        Combo.create(data);
    }catch (error){
        callback (null, error);
    }
};

controller.Get = async function(callback){
    try {
        let response = await Combo.findAll({ 
        });
        let combo = response.map(result => result.dataValues);
        callback(combo, null);
        
    } catch (error) {
        callback(error, null);
    }
}

controller.Update = async function (data){
    let response = Combo.update({
        Dish_id: data.Dish_id,
        Theater_id: data.Theater_id
    },{
        where:{
            id: data.id
        }
    });
}

controller.Delete = async function (data){
    console.log(data);
    let response = Combo.destroy({
        where:{
            id: data.id
        }
    })
}
module.exports = controller;