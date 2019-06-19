const sequelize = require('sequelize');
const db = require('../config/database');
const Language = require('../models/Language');

const controller = {};

controller.CreateLanguage = async function(data){
    try{
        console.log(data);
        Language.create(data);
    }catch (error){
        callback (null, error);
    }
};

controller.GetLanguage = async function(callback){
    try {
        let response = await Language.findAll({ 
        });
        let Language = response.map(result => result.dataValues);
        callback(Language, null);
        
    } catch (error) {
        callback(error, null);
    }
}

controller.UpdateLanguage = async function (data){
    let response = Language.update({
        LANGUAGE: data.LANGUAGE
    },{
        where:{
            LANGUAGE_ID: data.LANGUAGE_ID
        }
    });
}

controller.DeleteLanguage = async function (data){
    console.log(data)
    let response = Language.destroy({
        where:{
            LANGUAGE_ID: data.LANGUAGE_ID
        }
    })
}
module.exports = controller;