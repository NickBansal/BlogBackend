const APIrouter = require('express').Router();

APIrouter.get('/', (req, res) => {
	res.render('homepage');
});

module.exports = APIrouter;