const blogsRouter = require('express').Router();
const { sendAllBlogs } = require('../controllers/blogsCons');

blogsRouter
	.route('/')
	.get(sendAllBlogs);

module.exports = blogsRouter;