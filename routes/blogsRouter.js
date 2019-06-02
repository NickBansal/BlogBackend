const blogsRouter = require('express').Router();
const { sendAllBlogs, sendBlogById, postNewBlog, deleteBlogById } = require('../controllers/blogsCons');

blogsRouter
	.route('/')
	.get(sendAllBlogs)
	.post(postNewBlog);

blogsRouter
	.route('/:blog_id')
	.get(sendBlogById)
	.delete(deleteBlogById);

module.exports = blogsRouter;