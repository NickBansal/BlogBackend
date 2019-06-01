const express = require('app');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const DB_URL = require('./config');

mongoose.connect(DB_URL, { useNewUrlParser: true })
	.then(console.log(`Database is running on ${DB_URL}`));

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.json());

module.export = app;