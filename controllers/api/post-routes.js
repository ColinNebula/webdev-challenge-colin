const router = require('express').Router();
const { Post, User } = require('../../models');

// get all users
router.get('/', (req, res) => {
    console.log('======================');
    Post.findAll({
      // Query configuration
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
        'created_at'
    ],
    include: [
        {
        model: User,
        attributes: ['username']
    }
    ]
      
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
        res.status(500).json(err);
    });
  
  });

  // Find one post
  router.get('/:id', (req, res) => {
    Post.findOne({
      where: {
        id: req.params.id
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
      'created_at'],
      include: [
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// Create a post
  router.post('/', (req, res) => {
    // expects {title: 'Taskmaster goes public!', post_url: 'https://taskmaster.com/press', user_id: 1}
    Post.create({
      date: req.body.date,
      category: req.body.category,
      lot_title: req.body.lot_title,
      lot_location: req.body.lot_location,
      lot_condition: req.body.lot_condition,
      pre_tax_amount: req.body.pre_tax_amount,
      tax_name: req.body.tax_name,
      tax_amount: req.body.tax_amount,
      user_id: req.session.user_id
    })
      .then(dbPostData => res.json(dbPostData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  router.put('/:id', (req, res) => {
    Post.update(
      {
        date: req.body.date,
        lot_title: req.body.lot_title,
        category: req.body.category,
        lot_location: req.body.lot_location,
        lot_condition: req.body.lot_condition,
        pre_tax_amount: req.body.pre_tax_amount,
        tax_name: req.body.tax_name,
        tax_amount: req.body.tax_amount,
        user_id: req.body.user_id
      },
      {
        where: {
          id: req.params.id
        }
      }
    )
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  router.delete('/:id', withAuth, (req, res) => {
    console.log('id', req.params.id);
    Post.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;