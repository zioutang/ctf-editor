import express from 'express';
import models from '../models';

const router = express.Router();
const User = models.User;

// Example route
router.get('/', (req, res) => {
  res.send('Hello World!');
});
