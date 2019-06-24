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

controller.GetTheaters = async function(callback){
    try {
        let response = await Theater.findAll({ 
        });
        let theater = response.map(result => result.dataValues);
        callback(theater, null);
        
    } catch (error) {
        callback(error, null);
    }
}

controller.UpdateTheater = async function (data){
    let response = Theater.update({
        Fiscal_name : data.Fiscal_name,
        Opening_time : data.Opening_time,
        Closing_time : data.Closing_time,
        Location : data.Location

    },{
        where:{
            id: data.id
        }
    });
}

controller.DeleteTheater = async function (data){
    console.log(data);
    let response = Theater.destroy({
        where:{
            id: data.id
        }
    })
}
module.exports = controller;