module.exports = function (sequelize, DateTypes) {
    return sequelize.define("users", {
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
        surname: {
            type: DateTypes.STRING,
            allowNull: true,
            validate: {
                len: [0, 255]
            }
        },
        email: {
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