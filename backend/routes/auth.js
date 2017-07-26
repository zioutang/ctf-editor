const express = require('express');
const models = require('../models');

const router = express.Router();
const User = models.User;

module.exports = (passport) => {
  router.get('/', (req, res) => {
    if (req.user) {
      res.redirect('/documents');
    } else {
      res.redirect('/register');
    }
  });

  router.get('/register', (req, res) => {
    res.send({ page: 'register', value: true });
  });

  router.post('register', (req, res) => new User({
    username: req.body.username,
    fname: req.body.fname,
    lname: req.body.lname,
    password: req.body.password,
  }).save()
    .then(() => {
      res.redirect('/login');
    }));

  router.get('/login', (req, res) => {
    // res.render('login');
    res.send({ page: 'login', value: true });
  });

  router.post('/login', passport.authenticate('local', {
    successRedirect: '/documents',
    failureRedirect: '/login',
  }));

  return router;
};
