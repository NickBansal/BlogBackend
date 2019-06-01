/* eslint-disable no-console */
const seedDB = require('./seed');
const mongoose = require('mongoose');
const DB_URL = 'mongodb://Nick:bansal321@ds131753.mlab.com:31753/ncnews';
const blogs = require('./testData');

mongoose.connect(DB_URL, { useNewUrlParser: true })
	.then(() => seedDB(blogs))
	.then(() => mongoose.disconnect())
	.then(console.log('Finished'));