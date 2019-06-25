const sequelize = require('sequelize');
const db = require('../config/database');
const Subtitle = require('../models/Subtitle');
const Movie = require('../models/Movie');

const controller = {};

controller.CreateSubtitle = async function(data){
    try{
        console.log(data);
        Subtitle.create(data);
    }catch (error){
        callback (null, error);
    }
};

controller.GetSubtitles = async function(callback){
    try {
        let response = await Subtitle.findAll({ 
        });
        let subtitle = response.map(result => result.dataValues);
        callback(subtitle, null);
        
    } catch (error) {
        callback(error, null);
    }
}

controller.GetSubtitlesByMovieId = async function(data, callback){
    try {
        let response = await Subtitle.findAll({
            where:{
                Movie_id: data.id
            } 
        });
        let subtitle = response.map(result => result.dataValues);
        callback(subtitle, null);
        
    } catch (error) {
        callback(error, null);
    }
}

controller.GetMoviesBySubtitle = async function(data, callback){
    try {
        let response = await Subtitle.findAll({
            where:{
                Language_id: data.id
            } 
        });
        let subtitle = response.map(result => result.dataValues);
        callback(subtitle, null);
        
    } catch (error) {
        callback(error, null);
    }
}

controller.DeleteSubtitle = async function (data){
    console.log(data);
    let response = Subtitle.destroy({
        where:{
            id: data.id
        }
    })
}

module.exports = controller;