const router = require('express').Router();
const { Reviews } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        res.render('reviews', {
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:locations_id', (req, res) => {
    Reviews.findAll({
        where: {
            locations_id: req.params.locations_id
        }
    })
        .then(dbReviewsData => res.json(dbReviewsData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

router.post('/',  (req, res) => {
    
        Reviews.create({
            locations_id: req.body.locations_id,
            users_id: req.body.users_id,
            comment: req.body.comment,
            rating: req.body.rating,
            public: req.body.public

        })
            .then(dbReviewsData => res.json(dbReviewsData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            })
    
});

router.delete('/:id', withAuth, (req, res) => {
    Reviews.destroy({
        where: {
            id: req.params.id
        }
    }).then(dbReviewsData => {
        if (!dbReviewsData) {
            res.status(404).json({ message: 'No comment found with this id' });
            return;
        }
        res.json(dbReviewsData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;