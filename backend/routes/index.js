import express from 'express';
// import models from '../models';

const router = express.Router();
// const User = models.User;

// Example route
router.get('/documents', (req, res) => {
  if (!req.user) {
    res.redirect('/login');
  } else {
    res.render('documents');
  }
});
