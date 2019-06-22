const sequelize = require('sequelize');
const db = require('../config/database');
const Language = require('../models/Language');

const controller = {};

controller.Create = async function(data){
    try{
        console.log(data);
        Language.create(data);
    }catch (error){
        callback (null, error);
    }
};

controller.Get = async function(callback){
    try {
        let response = await Language.findAll({ 
        });
        let language = response.map(result => result.dataValues);
        callback(language, null);
        
    } catch (error) {
        callback(error, null);
    }
}

controller.Update = async function (data){
    let response = Language.update({
        Language: data.Language
    },{
        where:{
            id: data.id
        }
    });
}

controller.Delete = async function (data){
    console.log(data);
    let response = Language.destroy({
        where:{
            id: data.id
        }
    })
}
module.exports = controller;