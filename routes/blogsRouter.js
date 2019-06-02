const blogsRouter = require('express').Router();
const { sendAllBlogs, sendBlogById } = require('../controllers/blogsCons');

blogsRouter
	.route('/')
	.get(sendAllBlogs);

blogsRouter
	.route('/:blog_id')
	.get(sendBlogById);

module.exports = blogsRouter;