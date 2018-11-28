module.exports = function (sequelize, DateTypes) {
    return sequelize.define("devices", {
        id: {
            type: DateTypes.INTEGER,
            allowNull: false,
            unique: true,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DateTypes.STRING,
            allowNull: true,
            validate: {
                len: [0, 255]
            }
        },
        serial: {
            type: DateTypes.STRING,
            allowNull: true,
            validate: {
                len: [0, 255]
            }
        },
    },{
        timestamps: false
    });
};