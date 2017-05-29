const express = require('express');

const path = require('path');

const app = express();

// Redirect all HTTP traffic to HTTPS
function ensureSecure(req, res, next) {
  if (req.headers['x-forwarded-proto'] === 'https') {
    return next();
  }
  let redirectUrl = `https://${req.hostname}`;
  if (process.env.PORT && process.env.PORT !== 443) {
    redirectUrl = redirectUrl.concat(`:${process.env.PORT}`);
  } else {
    redirectUrl = redirectUrl.concat(':4000');
  }
  redirectUrl = redirectUrl.concat(req.url);
  return res.redirect(redirectUrl);
}
app.all('*', ensureSecure);

app.use(express.static('./build'));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './build', 'index.html'));
});

app.listen(process.env.PORT || 4000);
