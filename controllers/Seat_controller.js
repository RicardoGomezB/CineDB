const sequelize = require('sequelize');
const db = require('../config/database');
const Seat = require('../models/Seat');

const controller = {};

controller.CreateSeat = async function(data){
    try{
        console.log(data);
        Seat.create(data);
    }catch (error){
        callback (null, error);
    }
};

controller.GetSeats = async function(callback){
    try {
        let response = await Seat.findAll({ 
        });
        let seat = response.map(result => result.dataValues);
        callback(seat, null);
        
    } catch (error) {
        callback(error, null);
    }
}

controller.UpdateSeat = async function (data){
    let response = Seat.update({
        Room_id: data.Room_id,
        Row: data.Row,
        Column: data.Column
    },{
        where:{
            id: data.id
        }
    });
}

controller.DeleteSeat = async function (data){
    console.log(data);
    let response = Seat.destroy({
        where:{
            id: data.id
        }
    })
}

module.exports = controller;