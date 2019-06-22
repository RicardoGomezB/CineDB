const sequelize = require('sequelize');
const db = require('../config/database');
const Screening = require('../models/Screening');

const controller = {};

controller.Create = async function(data){
    try{
        console.log(data);
        Screening.create(data);
    }catch (error){
        callback (null, error);
    }
};

controller.Get = async function(callback){
    try {
        let response = await Screening.findAll({ 
        });
        let screening = response.map(result => result.dataValues);
        callback(screening, null);
        
    } catch (error) {
        callback(error, null);
    }
}

controller.Update = async function (data){
    let response = Screening.update({
        Movie_repertory_id: data.Movie_repertory_id,
        Room_id: data.Room_id,
        Start_time: data.Start_time,
        Date: data.Date
    },{
        where:{
            id: data.id
        }
    });
}

controller.Delete = async function (data){
    console.log(data);
    let response = Screening.destroy({
        where:{
            id: data.id
        }
    })
}

module.exports = controller;