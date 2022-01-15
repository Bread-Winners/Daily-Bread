const Locations = require('./Locations');
const Reviews = require('./Reviews');
const Users = require('./Users');

Users.hasMany(Locations, {
    foreignKey: 'users_id',
    onDelete: 'CASCADE',
});

Locations.belongsTo(Users, {
    foreignKey: 'users_id',
});

Locations.hasMany(Reviews, {
    foreignKey: 'locations_id',
    onDelete: 'CASCADE',
});

Reviews.belongsTo(Locations, {
    foreignKey: 'locations_id',
});

Users.hasMany(Reviews, {
    foreignKey: 'users_id',
    onDelete: 'CASCADE',
});


Reviews.belongsTo(Users, {
    foreignKey: 'users_id',
});

module.exports = { Users, Reviews, Locations };


