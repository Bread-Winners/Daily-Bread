const router = require('express').Router();
const { Locations } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/',  (req, res) => {
    
    Locations.create({
        name: req.body.name,
        address: req.body.address,
        city: req.body.city,
        zip: req.body.zip,
        state: req.body.state,
        favorite: req.body.favorite,
        users_id: req.body.users_id

    })
        .then(dbLocationData => res.json(dbLocationData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })

});

router.get('/', withAuth, async (req, res) => {
    const locationData = await Locations.findAll().catch((err) => {
        res.json(err)
    })
         const locations = locationData.map((location) => location.get({ plain:true}))
         res.render('locations', { locations,
              logged_in: req.session.logged_in })
 });


module.exports = router;