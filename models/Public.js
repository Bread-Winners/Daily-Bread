const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Public extends Model {

}

Public.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        saved_locations_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'saved_locations',
                key: 'id',               
            },
        },

        users_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'users',
                key: 'id',               
            },
        },

        comment: {
            type: DataTypes.VARCHAR(280),
            allowNull: true,
            references: {
                model: 'comment',
                key: 'id',               
            },
        },

        rating: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                msg: 'Please enter a rating between 0 and 5!',
            }
        },


    },

    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'public',
    }
);

module.exports = Public;
