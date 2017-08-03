const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.get('/oauth/authorize', (req, res) => {
  if (!req.query.redirect_uri) {
    res.error();
  }

  if (req.query.client_id !== "6d781bfd42506613a0fe4ad4123aaf6d") {
    res.redirect(`${req.query.redirect_uri}?error_description=no client id`);
  }

  if (req.query.response_type !== "token") {
    res.redirect(`${req.query.redirect_uri}?error_description=wrong response type`);
  }

  if (req.query.scope !== "military") {
    res.redirect(`${req.query.redirect_uri}?error_description=wrong scope`);
  }

  res.redirect(`${req.query.redirect_uri}?access_token=1234`);
});

app.post('/api/v1/users/profile/verify', (req, res) => {
  if (req.body.access_token === "1234") {
    res.send({verified: true});
  } else {
    res.error();
  }
});

app.listen(4001, () => {
  console.log('Mock ID.ME Service Running on port 4001!');
});