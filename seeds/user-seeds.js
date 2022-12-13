const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'alesmonde0',
    email: 'nwestnedge0@cbc.ca',
    password: 'password123'
  },
  {
    username: 'jwilloughway1',
    email: 'remebes1@gmail.com',
    password: 'password123'
  },
  {
    username: 'iboddam2',
    email: 'stoneman2@hotmail',
    password: 'password123'
  },
  {
    username: 'dstanmer3',
    email: 'ihellier3@goo.com',
    password: 'password123'
  },
  {
    username: 'starling',
    email: 'starling4@nri.com',
    password: 'password123'
  },
 
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
