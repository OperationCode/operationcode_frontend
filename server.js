const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

app.enable('trust proxy');

app.use((req, res, next) => {
	if (req.headers['x-forwarded-proto'] !== 'https') {
		return res.redirect(`http://${req.headers.host}${req.url}`);
	}
	return next();
});

app.use(express.static('./build'));

app.use(bodyParser.json());

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, './build', 'index.html'));
});

app.listen(process.env.PORT, (request, response, error) => {
	if (error) {
		console.error(error);
	} else {
		console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`);
	}
});
