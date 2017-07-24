import express from 'express';
import passport from 'passport';
import path from 'path';
import bodyParser from 'body-parser';
import models from './models';
import routes from './routes/index';
import auth from './routes/auth';

const User = models.User;
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(session({ secret: 'Brian Fakhoury doesn\'t shower' }));

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

passport.use(new LocalStrategy(((username, password, done) => {
  User.findOne({ username }, (err, user) => {
    if (err) {
      return done(err);
    }
    if (!user) {
      return done(null, false);
    }
    if (user.password !== password) {
      return done(null, false);
    }
    return done(null, user);
  });
})));

app.use(passport.initialize());
app.use(passport.session());

app.use('/', auth(passport));
app.use('/', routes);

app.listen(3000, () => {
  console.log('Backend server for Electron App running on port 3000!');
});
