const express = require('express');

const path = require('path');

const app = express();

app.use((req, res, next) => {
  if (!req.secure) {
    return res.redirect(`https://${req.headers.host}${req.url}`);
  }
  return next();
});

app.use(express.static('./build'));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './build', 'index.html'));
});

app.listen(process.env.PORT);
