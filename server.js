const express = require('express');
const path = require('path');
const Raven = require('raven');
const app = express();

// const webpack = require('webpack');
// const webpackDevMiddleware = require('webpack-dev-middleware');
// const webpackHotMiddleware = require('webpack-hot-middleware');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
//
const port = 4001;
// //
// const config = require('./config/webpack.config.dev');
// const compiler = webpack();

app.enable('trust proxy');

app.use((req, res, next) => {
	if (req.headers['x-forwarded-proto'] !== 'https') {
		return res.redirect(`http://${req.headers.host}${req.url}`);
	}
	return next();
});
app.use(wrapMiddleware(async function(req) {
  await db.collection('logs').insertOne({
    createdAt: new Date(),
    method: req.method,
    url: req.url
  });
}));
Raven.config('https://9e93312b65404926a268e23878ce3ddd:d8e19b35d4e84195897d8d84ebcdec02@sentry.io/208250').install();

function wrapMiddleware(fn) {
  return function(req, res, next) {
		try {
		    handleRouteChange()
		} catch (err) {
		    Raven.captureException(err);
		    Raven.showReportDialog;
		}
 /* If promise resolves, call `next()` with no args, otherwise
 call `next()` with the error from the promise rejection */

    fn(req).then(() => next(), next);
  };
}

Raven.config('https://9e93312b65404926a268e23878ce3ddd:d8e19b35d4e84195897d8d84ebcdec02@sentry.io/208250').install();
try {
    handleRouteChange()
} catch (err) {
    Raven.captureException(err);
    Raven.showReportDialog;
}
app.use(express.static('./build'));

// app.use(webpackDevMiddleware(compiler, {
// 	noInfo: true,
// 	publicPath: config.output.publicPath
// }));
// app.use(webpackHotMiddleware(compiler));
app.use(bodyParser.json());

app.post('/auth/getToken/', (req, res) => {
	if (req.body.email == 'hello@test.com' && req.body.password == 'test') {
		res.status(200).json({token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6IlRlc3QgVXNlciJ9.J6n4-v0I85zk9MkxBHroZ9ZPZEES-IKeul9ozxYnoZ8'});
	} else {
		res.sendStatus(403);
	}
});

app.get('/api/v1/*', (req, res) => {
	let token = req.headers['authorization'];
	if (!token) {
		res.sendStatus(401);
	} else {
		try {
			let decoded = jwt.verify(token.replace('Bearer ', ''), 'secret-key');
			res.status(200).json({data: 'Valid JWT found! This protected data was fetched from the server.'});
		} catch (e) {
			res.sendStatus(401);
		}
	}
})

app.get('/#', (req, res) => {
	res.sendFile(path.join(__dirname, './build', 'index.html'));
});

app.listen(process.env.PORT || 4001, (request, response, error) => {
	if (error) {
		console.error(error);
	} else {
		console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`);
	}
});
