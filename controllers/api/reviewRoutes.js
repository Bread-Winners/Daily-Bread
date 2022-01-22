const router = require('express').Router();
const { Reviews, Users } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
    const reviewData = await Reviews.findAll({
        where: {
            users_id: req.session.users_id
        }
    })
         console.log("thisis rfev", reviewData)

    //     return res.json(dbReviewsData)})
    // .catch(err => {
    //     console.log(err);
    //     res.status(500).json(err);
    // })
        
    // // const reviewData = await Reviews.findAll().catch((err) => {
    // //     res.json(err)
    // // })

    // const reviews = reviewData.map((review) =>
    // review.get({ plain: true }))
    // res.
    // try {
    //     res.render('reviews', {
    //         logged_in: req.session.logged_in
    //     });
    // } catch (err) {
    //     res.status(500).json(err);
    // }
});

router.get('/:id', (req, res) => {
    Reviews.findAll({
        where: {
            id: req.params.id
        }
    })
        .then(dbReviewsData => {
            console.log("This is the data", dbReviewsData)
            
            return res.json(dbReviewsData)})
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

router.post('/', (req, res) => {
    console.log("hi!!!!!!!", req.body)
        Reviews.create({
            
           ...req.body,
           users_id: req.session.users_id

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