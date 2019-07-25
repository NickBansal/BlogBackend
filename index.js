/* eslint-disable no-console */
// eslint-disable-next-line no-undef
process.env.NODE_ENV = 'production';
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const DB_URL = require('./config');
const bodyParser = require('body-parser');
const cors = require('cors');
const { handle404, handle400, handle500 } = require('./error-handlers');
const APIrouter = require('./routes/APIrouter');

mongoose.connect(DB_URL, { useNewUrlParser: true })
	.then(console.log(`Database is running on ${DB_URL}`));


app.set('view engine', 'ejs');
app.use(cors());
app.use('/uploads', express.static('uploads'));
app.use(bodyParser.json());

app.use('/', APIrouter);

app.use('/*', (req, res, next) => next({ status: 404, msg: `${req.originalUrl} does not exist` }));
app.use(handle404);
app.use(handle400);
app.use(handle500);

module.exports = app;