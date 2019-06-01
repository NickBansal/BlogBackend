/* eslint-disable no-console */
const mongoose = require('mongoose');
const Blogs = require('../models');

const seedDB = blogsData => {
	return mongoose.connection
		.dropDatabase()
		.then(() => {
			const blogRaw = Blogs.insertMany(blogsData);
			return Promise.all([blogRaw]);
		})
		.then(([blogsDocs]) => [blogsDocs])
		.catch(console.log);
};

module.exports = seedDB;