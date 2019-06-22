const sequelize = require('sequelize');
const db = require('../config/database');
const Subtitle = require('../models/Subtitle');

const controller = {};

controller.Create = async function(data){
    try{
        console.log(data);
        Subtitle.create(data);
    }catch (error){
        callback (null, error);
    }
};

controller.Get = async function(callback){
    try {
        let response = await Subtitle.findAll({ 
        });
        let subtitle = response.map(result => result.dataValues);
        callback(subtitle, null);
        
    } catch (error) {
        callback(error, null);
    }
}

controller.Delete = async function (data){
    console.log(data);
    let response = Subtitle.destroy({
        where:{
            id: data.id
        }
    })
}

module.exports = controller;