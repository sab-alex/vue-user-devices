const express = require('express');
const Router = express.Router();
let Device =  require('../models').device;
let User =  require('../models').user;
let UserDevices =  require('../models').userDevices;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const to = require('await-to-js');


Router.route('/').get(function (req, res) {
    const queryParams = {
        include:[
            User,
        ]
    };
    Device.findAll(queryParams).then( (data) => {
        res.json(data);
    })
});
Router.route('/users').get(function (req, res) {
    const queryParams = {
        include:[
            User,
        ]
    };
    let users = [];
    if (req.query.users) {
        
        if (Array.isArray(req.query.users)) {
            users = req.query.users;
        } else {
            users.push(req.query.users);
        }
       
    }
    queryParams.include = [{
        model: User,
        where: { id: { [Op.in]: users } }
    }];
    Device.findAll(queryParams).then( (data) => {
        res.json(data);
    })
});

Router.route('/:id/update').post((req, res) => {
    const id = req.params.id;
    const body = req.body;
    Device.findByPk(id).then( (device) => {
        device.update(body.object).then( (response) => {
            res.json(response);
        });
    });
    
});

Router.route('/attach').post((req, res) => {
    UserDevices.findOrCreate({where: req.body}).then( (item) => {
        res.json(item);
    });
});

module.exports = Router;