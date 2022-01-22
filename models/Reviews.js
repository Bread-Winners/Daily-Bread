const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Reviews extends Model {

}

Reviews.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        pantry_name: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        pantry_address: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        users_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'users',
                key: 'id',
            },
        },

        comment: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                max: 280
            },
        },
    },

    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'reviews',
    }
);

module.exports = Reviews;
