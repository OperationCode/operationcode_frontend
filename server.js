const express = require('express');
const path = require('path');
const Raven = require('raven');
const app = express();

// Must configure Raven before doing anything else with it
Raven.config('__DSN__').install();

// The request handler must be the first middleware on the app
app.use(Raven.requestHandler() {
  parseUser: function (req) {
    // custom user parsing logic
    return {
      username: req.users.username,
      id: req.user.getId()
     };
   }
});

app.get('/', function mainHandler(req, res) {
    throw new Error('Broke!');
});

// The error handler must be before any other error middleware
app.use(Raven.errorHandler() {
  parseUser: function (req) {
    // custom user parsing logic
    return {
      username: req.specialUserField.username,
      id: req.specialUserField.getId()
    };
  }
});

// Optional fallthrough error handler
app.use(function onError(err, req, res, next) {
  // The error id is attached to `res.sentry` to be returned
  // and optionally displayed to the user for support.
  res.statusCode = 500;
  res.end(res.sentry + '\n');
});

app.enable('trust proxy');

app.use((req, res, next) => {
  if (req.headers['x-forwarded-proto'] !== 'https') {
    return res.redirect(`https://${req.headers.host}${req.url}`);
  }
  return next();
});

app.use(express.static('./build'));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './build', 'index.html'));
});

app.listen(process.env.PORT);
