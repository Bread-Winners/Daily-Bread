const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Locations extends Model {

}

Locations.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        city: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        zip: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        state: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        favorite: {
            type: DataTypes.TINYINT,
            allowNull: true,
        },
        hoursOfOp: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        users_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'users',
                key: 'id',
            },
        },
    },

    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'locations',
    }
);

module.exports = Locations;
