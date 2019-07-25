const blogsRouter = require('express').Router();
const { sendAllBlogs, sendBlogById, postNewBlog, deleteBlogById, editCurrentBlog } = require('../controllers/blogsCons');
const multer = require('multer');

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, './uploads/');
	},
	filename: function (req, file, cb) {
		cb(null, file.originalname);
	},
});

const upload = multer({ storage });

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