const sequelize = require('sequelize');
const db = require('../config/database');
const Room_type = require('../models/Room_type');

const controller = {};

controller.CreateRoomType = async function(data){
    try{
        console.log(data);
        Room_type.create(data);
    }catch (error){
        callback (null, error);
    }
};

controller.GetRoomTypes = async function(callback){
    try {
        let response = await Room_type.findAll({ 
        });
        let room_type = response.map(result => result.dataValues);
        callback(room_type, null);
        
    } catch (error) {
        callback(error, null);
    }
}

controller.UpdateRoomType = async function (data){
    let response = Room_type.update({
        Description: data.Description,
    },{
        where:{
            id: data.id
        }
    });
}

controller.DeleteRoomType = async function (data){
    console.log(data);
    let response = Room_type.destroy({
        where:{
            id: data.id
        }
    })
}

module.exports = controller;