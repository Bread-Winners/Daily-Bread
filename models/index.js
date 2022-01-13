const Locations = require('./Locations');
const Reviews = require('./Reviews');
const Users = require('./Users');

// User has many
Users.hasMany(Locations, {
    foreignKey: 'users_id',
    onDelete: 'CASCADE',
});

Users.hasMany(Reviews, {
    foreignKey: 'users_id',
    onDelete: 'CASCADE',
});

Locations.hasMany(Reviews, {
    foreignKey: 'locations_id',
    onDelete: 'CASCADE',
});

Locations.hasMany(Users, {
    foreignKey: 'users_id',
    onDelete: 'CASCADE',
});


// belongs to
Reviews.belongsTo(Users, {
    foreignKey: 'users_id',
});

Reviews.belongsTo(Locations, {
    foreignKey: 'locations_id',
});

Users.belongsTo(Locations, {
    foreignKey: 'locations_id',
});

Locations.belongsTo(Users, {
    foreignKey: 'users_id',
});



module.exports = { Users, Reviews, Locations };


