const router = require('express').Router();
const { Reviews } = require('../../models');


router.get('/', async (req, res) => {
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

router.post('/', withAuth, (req, res) => {
    if (req.session) {
        Reviews.create({
            locations_id: req.body.locations_id,
            user_id: req.session.user_id,
            comment: req.body.comment,
            rating: req.session.rating,
            public: req.session.public

        })
            .then(dbReviewsData => res.json(dbReviewsData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            })
    }
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