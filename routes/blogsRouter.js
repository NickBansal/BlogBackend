const blogsRouter = require('express').Router();
const { sendAllBlogs, sendBlogById, postNewBlog, deleteBlogById, editCurrentBlog } = require('../controllers/blogsCons');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

blogsRouter
	.route('/')
	.get(sendAllBlogs)
	.post(upload.single('productImage'), postNewBlog);

blogsRouter
	.route('/:blog_id')
	.get(sendBlogById)
	.delete(deleteBlogById)
	.put(editCurrentBlog);

module.exports = blogsRouter;