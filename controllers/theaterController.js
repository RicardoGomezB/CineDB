const sequelize = require('sequelize');
const db = require('../config/database');
const Theater = require('../models/Theater');

const controller = {};

controller.CreateTheater = async function(data){
    try{
        console.log(data);
        Theater.create(data);
    }catch (error){
        callback (null, error);
    }
};

controller.GetTheater = async function(callback){
    try {
        let response = await Theater.findAll({ 
        });
        let Theater = response.map(result => result.dataValues);
        callback(Theater, null);
        
    } catch (error) {
        callback(error, null);
    }
}

controller.UpdateTheater = async function (data){
    let response = Theater.update({
        FISICAL_NAME : data.FISICAL_NAME,
        OPENING_TIME : data.OPENING_TIME,
        CLOSING_TIME : data.CLOSING_TIME,
        LOCATION : data.LOCATION

    },{
        where:{
            THEATER_ID: data.THEATER_ID
        }
    });
}

controller.DeleteTheater = async function (data){
    console.log(data)
    let response = Theater.destroy({
        where:{
            THEATER_ID: data.THEATER_ID
        }
    })
}
module.exports = controller;