const mongoose = require('mongoose')
const Schema = mongoose.Schema

//
// mongoose.connect(process.env.MONGODB_URI);
// mongoose.connection.on('connected', function () {
//   console.log('successfully connected to database')
// });
// mongoose.Promise = global.Promise;


const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  documents: [{
    type: Schema.ObjectId,
    ref: 'Doc'
  }]
});

const docSchema = new Schema({
  content: {
    type: String
  },
  title: {
    type: String,
    required: true
  },
  owner: {
    type: Schema.ObjectId,
    ref: 'User',
    required: true
  }
});
// Make the owner title combination unique
docSchema.index({
  owner: 1,
  title: 1
}, {
  unique: true
});

module.exports = {
  User: mongoose.model('User', userSchema),
  Doc: mongoose.model('Doc', docSchema)
}
