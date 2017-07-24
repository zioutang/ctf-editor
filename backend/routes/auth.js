import express from 'express';
import models from '../models';

const router = express.Router();
const User = models.User;

module.exports = function (passport) {
  router.get('/', (req, res) => {
    if (req.user) {
      console.log('There is a user');
    } else {
      console.log('There is no user');
    }
  });
};
