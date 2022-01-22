const router = require('express').Router();
const userRoutes = require('./userRoutes');
const reviewRoutes = require('./reviewRoutes');
const locationRoutes = require('./locationsRoutes');

router.use('/users', userRoutes);
router.use('/reviews', reviewRoutes);
router.use('/locations', locationRoutes);


module.exports = router;