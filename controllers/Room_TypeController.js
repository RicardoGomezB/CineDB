const sequelize = require('sequelize');
const db = require('../config/database');
const Room_Type = require('../models/Room_Type');

const controller = {};

controller.CreateRoom_Type = async function(data){
    try{
        console.log(data);
        Room_Type.create(data);
    }catch (error){
        callback (null, error);
    }
};

controller.GetRoom_Type = async function(callback){
    try {
        let response = await Room_Type.findAll({ 
        });
        let Room_Type = response.map(result => result.dataValues);
        callback(Room_Type, null);
        
    } catch (error) {
        callback(error, null);
    }
}

controller.UpdateRoom_Type = async function (data){
    let response = Room_Type.update({
        DESCRIPTION: data.DESCRIPTION
    },{
        where:{
            ROOM_TYPE_ID: data.ROOM_TYPE_ID
        }
    });
}

controller.DeleteRoom_Type = async function (data){
    console.log(data)
    let response = Room_Type.destroy({
        where:{
            ROOM_TYPE_ID: data.ROOM_TYPE_ID
        }
    })
}
module.exports = controller;