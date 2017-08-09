const express = require('express');
const path = require('path');

const app = express();


app.enable('trust proxy');

app.use((req, res, next) => {
  if (req.headers['x-forwarded-proto'] !== 'https') {
    return res.redirect(`https://${req.headers.host}${req.url}`);
  }
  return next();
});

app.use('/public', express.static(__dirname + '/public'));
app.use('/public/images', express.static(__dirname + '/public/images'));
app.use('/build', express.static(__dirname + '/build'));
app.use('/build/static', express.static(__dirname + '/build/static'));
// app.use('/build/static/js', express.static(__dirname + '/build/static/js'));
// app.use('/build/static/css', express.static(__dirname + '/build/static/css'));
// app.use('/build/static/media', express.static(__dirname + '/build/static/media'));

app.use(express.static('./build'));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './build', 'index.html'));
});


app.listen(process.env.PORT);
