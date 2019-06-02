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
		.then(blog => {
			if (!blog) return Promise.reject({ status: 400, msg: 'Blog not found' });
			res.status(200).send(blog);
		})
		.catch(next);

};

exports.postNewBlog = (req, res, next) => {
	const { body, title, image } = req.body;
	Blogs.create({ body, title, image })
		.then(blog => res.send(blog))
		.catch(next);
};