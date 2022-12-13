const router = require('express').Router();

const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

router.get('/', (req, res) => { 
    Post.findAll({
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
    console.log(dbPostData[0]);
    const posts = dbPostData.map(post => post.get({ plain: true }));
    // pass a single post object into the homepage template
    res.render('homepage', { posts });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});



module.exports = router;