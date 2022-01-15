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
        address: {
            type: DataTypes.STRING,
            allowNull: false,
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
            allowNull: false,
        },
        
        users_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
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
