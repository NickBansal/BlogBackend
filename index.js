/* eslint-disable no-console */
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const DB_URL = require('./config');
const bodyParser = require('body-parser');
const cors = require('cors');
const APIrouter = require('./routes/APIrouter');

mongoose.connect(DB_URL, { useNewUrlParser: true })
	.then(console.log(`Database is running on ${DB_URL}`));

app.set('view engine', 'ejs');
app.use(cors());
app.use(express.static('public'), bodyParser.json());
app.use('/', APIrouter);

module.exports = app;