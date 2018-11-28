const express = require('express');
const Router = express.Router();
let User =  require('../models').user;
let Device =  require('../models').device;

// Defined get data(index or listing) route
Router.route('/').get(function (req, res) {
    const queryParams = {
        include:[
            Device,
        ]
    };
    User.findAll(queryParams).then( (data) => {
        res.json(data);
    })
});

module.exports = Router;