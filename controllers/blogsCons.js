const Blogs = require('../models');

exports.sendAllBlogs = (req, res, next) => {
	return Promise.all([
		Blogs.find()
			.lean()
			.exec()
	])
		.then(blogs => res.send(blogs))
		.catch(next);
};

exports.sendBlogById = (req, res, next) => {
	const { blog_id } = req.params;
	return Promise.all([
		Blogs.findById(blog_id)
			.lean()
			.exec()
	])
		.then(blogs => res.send(blogs))
		.catch(next);
};