module.exports = function (sequelize, DateTypes) {
    return sequelize.define("user_devices", {
        id: {
            type: DateTypes.INTEGER,
            allowNull: false,
            unique: true,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DateTypes.INTEGER
        },
        device_id: {
            type: DateTypes.INTEGER
        },
    },{
        timestamps: false
    });
};