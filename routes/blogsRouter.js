const blogsRouter = require('express').Router();
const { sendAllBlogs, sendBlogById, postNewBlog } = require('../controllers/blogsCons');

blogsRouter
	.route('/')
	.get(sendAllBlogs)
	.post(postNewBlog);

blogsRouter
	.route('/:blog_id')
	.get(sendBlogById);

module.exports = blogsRouter;