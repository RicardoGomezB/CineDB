const sequelize = require('sequelize');
const db = require('../config/database');
const Seat = require('../models/Seat');

const controller = {};

controller.Create = async function(data){
    try{
        console.log(data);
        Seat.create(data);
    }catch (error){
        callback (null, error);
    }
};

controller.Get = async function(callback){
    try {
        let response = await Seat.findAll({ 
        });
        let seat = response.map(result => result.dataValues);
        callback(seat, null);
        
    } catch (error) {
        callback(error, null);
    }
}

controller.Update = async function (data){
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

controller.Delete = async function (data){
    console.log(data);
    let response = Seat.destroy({
        where:{
            id: data.id
        }
    })
}

module.exports = controller;