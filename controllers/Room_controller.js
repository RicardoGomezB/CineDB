const sequelize = require('sequelize');
const db = require('../config/database');
const Room = require('../models/Room');

const controller = {};

controller.CreateRoom = async function(data){
    try{
        console.log(data);
        Room.create(data);
    }catch (error){
        callback (null, error);
    }
};

controller.GetRooms = async function(callback){
    try {
        let response = await Room.findAll({ 
        });
        let room = response.map(result => result.dataValues);
        callback(room, null);
        
    } catch (error) {
        callback(error, null);
    }
}

controller.UpdateRoom = async function (data){
    let response = Room.update({
        Theater_id: data.Theater_id,
        Technology_type_id: data.Technology_type_id,
        Room_type_id: data.Room_type_id,
        Exit_id: data.Exit_id,
        Entrance_id: data.Entrance_id,
        Aile_id: data.Aile_id,
        Col_qty: data.Col_qty,
        Row_qty: data.Row_qty,
        Room_number: data.Room_number
        
    },{
        where:{
            id: data.id
        }
    });
}

controller.DeleteRoom = async function (data){
    console.log(data);
    let response = Room.destroy({
        where:{
            id: data.id
        }
    })
}

controller.GetRoomsByTheaterId = async function(data, callback){
    try {
        console.log(data);
        let response = await Room.findAll({ 
            where: {
                id: data.Theater_id
            }
        });
        let rooms = response.map(result => result.dataValues);
        callback(rooms, null);
    } catch (error) {
        callback(error, null);
    }
}

module.exports = controller;