const fs = require('fs');
require('dotenv').load();

const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    timezone:'Europe/Moscow',
    operatorsAliases: false,
    logging: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    define: {
        "underscored": true
    }
});

let db = {};

//MODELS
db.user = sequelize.import(__dirname + "/User.js");
db.device = sequelize.import(__dirname + "/Device.js");
db.userDevices = sequelize.import(__dirname + "/UserDevices.js");

//RELATIONS
db.user.belongsToMany(db.device, { through: db.userDevices, foreignKey: 'user_id', otherKey: 'device_id'});
db.device.belongsToMany(db.user, { through: db.userDevices, foreignKey: 'device_id', otherKey: 'user_id'});

db.sequelize = sequelize; //contain a settings of database
db.Sequelize = Sequelize;

module.exports = db;
