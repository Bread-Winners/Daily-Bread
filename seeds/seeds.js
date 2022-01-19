const sequelize = require('../config/connection');
const { Users } = require('../models');
const { Locations } = require('../models');
const { Reviews } = require('../models');

const userData = require('./userData.json');
const locationData = require('./locationData.json');
const reviewData = require('./reviewData.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Users.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Locations.bulkCreate(locationData, {
    individualHooks: true,
    returning: true,
  });

  await Reviews.bulkCreate(reviewData, {
    individualHooks: true,
    returning: true,
  })

  process.exit(0);
};

seedDatabase();
