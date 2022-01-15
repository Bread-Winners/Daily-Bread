const router = require('express').Router();
const uuid = require('../../utils/uuid');
const { Users } = require('../../models');

router.post('/', async (req, res) => {
   try {
       const { first_name, last_name, email, password } = req.body
    if (req.body) {
        const newUser = {
            first_name,
            last_name,
            email,
            password,
            id: uuid(),
        };
        const userData = await Users.create(newUser);
        
        
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            
            res.status(200).json(userData);
        });
        
        
    }} catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router