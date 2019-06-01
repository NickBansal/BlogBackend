/* eslint-disable no-console */
const seedDB = require('./seed');
const mongoose = require('mongoose');
const DB_URL = require('../config');
const blogs = require('./testData');

mongoose.connect(DB_URL, { useNewUrlParser: true })
	.then(() => seedDB(blogs))
	.then(() => mongoose.disconnect())
	.then(console.log('Finished'));