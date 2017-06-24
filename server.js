const express = require('express');

const path = require('path');

const app = express();

app.enable('trust proxy');

app.use(express.static('./build'));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './build', 'index.html'));
});

app.listen(4000);
