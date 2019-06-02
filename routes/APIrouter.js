const APIrouter = require('express').Router();
const blogsRouter = require('./blogsRouter');

APIrouter.get('/', (req, res) => {
	res.render('homepage');
});

APIrouter.use('/blogs', blogsRouter);

module.exports = APIrouter;