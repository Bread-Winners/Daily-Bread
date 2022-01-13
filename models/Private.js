const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Private extends Model {

}

Private.init(
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
            allowNull: false,
            references: {
                model: 'comment',
                key: 'id',               
            },
        },
    },

    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'private',
    }
);

module.exports = Private;
