const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
    Post.findAll({
        where: {
          // use the ID from the session
          user_id: req.session.user_id
        },
        attributes: [
            'id',
            'date',
            'category',
            'lot_title',
            'lot_location',
            'lot_condition',
            'pre_tax_amount',
            'tax_name',
            'tax_amount',
            'created_at',
        ],
        include: [
          {
              model: User,
              attributes: ['username']
            },
          {
            model: User,
            attributes: ['username']
          }
        ]
      })
        .then(dbPostData => {
          // serialize data before passing to template
          const posts = dbPostData.map(post => post.get({ plain: true }));
          res.render('dashboard', { posts, loggedIn: true });
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });

        const post = dbPostData.get({ plain: true });

    res.render('edit-post', {
    post,
    loggedIn: true
        });
    });

module.exports = router;