const router = require('express').Router();
// const { Locations, Users, Reviews } = require('../models'); 
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    if (req.session.userid) {
        res.send("Welcome User <a href=\'/logout'>click to logout</a>");
    } else {
        res.sendFile(path.join(__dirname, '/public/index.html')) 
    } 
});

module.exports = router;