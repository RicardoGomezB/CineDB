const sequelize = require('sequelize');
const db = require('../config/database');
const Fact_Sales = require('../models/Fact_Sales');

const controller = {};

controller.CreateFact_Sales = async function(data){
    try{
        console.log(data);
        Fact_Sales.create(data);
    }catch (error){
        callback (null, error);
    }
};

controller.GetFact_Sales = async function(callback){
    try {
        let response = await Fact_Sales.findAll({ 
        });
        let Fact_Sales = response.map(result => result.dataValues);
        callback(Fact_Sales, null);
        
    } catch (error) {
        callback(error, null);
    }
}

controller.UpdateFact_Sales = async function (data){
    let response = Fact_Sales.update({
        DATE: data.DATE,
        WEEK: data.WEEK,
        QUANTITY: data.QUANTITY,
        THETAER_ID: data.THETAER_ID,
        MOVIE_ID: data.MOVIE_ID,
        PRODUCT_ID: data.PRODUCT_ID
        
    },{
        where:{
            INVOICE_ID: data.INVOICE_ID
        }
    });
}

controller.DeleteFact_Sales = async function (data){
    console.log(data)
    let response = Fact_Sales.destroy({
        where:{
            INVOICE_ID: data.INVOICE_ID
        }
    })
}
module.exports = controller;