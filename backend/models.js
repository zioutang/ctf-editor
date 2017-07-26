const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);

const User = mongoose.model('User', {
  username: {
    type: String,
    required: true,
  },
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  owned: {
    type: Array,
  },
  collaborated: {
    type: Array,
  },
});

const Document = mongoose.model('Document', {
  body: {
    type: String,
  },
  author: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  collaborators: {
    type: Array,
    required: true,
  },
});

module.exports = {
  User,
  Document,
};
