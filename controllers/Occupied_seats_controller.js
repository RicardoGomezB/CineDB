const sequelize = require('sequelize');
const db = require('../config/database');
const Controller_seats = require('../models/Occupied_Seat');

const controller = {};

controller.CreateOccupiedSeat = async function(data){
    try{
        console.log(data);
        Controller_seats.create(data);
    }catch (error){
        callback (null, error);
    }
};

controller.GetOccupiedSeats = async function(callback){
    try {
        let response = await Controller_seats.findAll({ 
        });
        let controller_seats = response.map(result => result.dataValues);
        callback(controller_seats, null);
        
    } catch (error) {
        callback(error, null);
    }
}

controller.DeleteOccupiedSeat = async function (data){
    console.log(data);
    let response = Controller_seats.destroy({
        where:{
            Seat_id: data.Seat_id
        }
    })
}
module.exports = controller;