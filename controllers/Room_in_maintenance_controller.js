const sequelize = require('sequelize');
const db = require('../config/database');
const Room_in_maintenance = require('../models/Room_in_maintenance');

const controller = {};

controller.Create = async function(data){
    try{
        console.log(data);
        Room_in_maintenance.create(data);
    }catch (error){
        callback (null, error);
    }
};

controller.Get = async function(callback){
    try {
        let response = await Room_in_maintenance.findAll({ 
        });
        let room_in_maintenance = response.map(result => result.dataValues);
        callback(room_in_maintenance, null);
        
    } catch (error) {
        callback(error, null);
    }
}

controller.Delete = async function (data){
    console.log(data);
    let response = Room_in_maintenance.destroy({
        where:{
            Room_id: data.Room_id
        }
    })
}
module.exports = controller;