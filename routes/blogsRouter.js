const blogsRouter = require('express').Router();
const { sendAllBlogs, sendBlogById, postNewBlog, deleteBlogById, editCurrentBlog } = require('../controllers/blogsCons');

blogsRouter
	.route('/')
	.get(sendAllBlogs)
	.post(postNewBlog);

blogsRouter
	.route('/:blog_id')
	.get(sendBlogById)
	.delete(deleteBlogById)
	.put(editCurrentBlog);

module.exports = blogsRouter;