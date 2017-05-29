const express = require('express');

const path = require('path');

const app = express();

const FALLBACK_PORT = 4000;

// Redirect all HTTP traffic to HTTPS
function ensureSecure(req, res, next) {
  if (req.headers['x-forwarded-proto'] === 'https') {
    return next();
  }
  let redirectUrl = `https://${req.hostname}`;
  let port = parseInt(process.env.PORT, 10);
  if (port !== 443) {
    if (!port) port = FALLBACK_PORT;
    redirectUrl = `${redirectUrl}:${port}`;
  }
  redirectUrl = redirectUrl.concat(req.url);
  return res.redirect(redirectUrl);
}
app.all('*', ensureSecure);

app.use(express.static('./build'));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './build', 'index.html'));
});

app.listen(process.env.PORT || FALLBACK_PORT);
