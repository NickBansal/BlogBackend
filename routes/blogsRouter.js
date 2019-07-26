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

const fileFilter = (req, file, cb) => {
	if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
		cb(null, true);
	}
	cb(null, false);
};

const upload = multer({
	storage,
	limits: { fileSize: 1024 * 1024 },
	fileFilter
});

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