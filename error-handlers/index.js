exports.handle404 = (err, req, res, next) => {
	const { status, msg } = err;
	if (status === 404) res.status(status).send({ msg });
	else next(err);
};

exports.handle400 = (err, req, res, next) => {
	const { status, msg, name } = err;
	if (err === 'Filetype not supported') res.status(400).send({ msg: 'Filetype not supported' });
	if (name === 'ValidationError' || name === 'CastError') res.status(400).send({ msg: 'Bad request' });
	if (status === 400) res.status(status).send({ msg });
	else next(err);
};

exports.handle500 = (err, req, res) => {
	res.status(500).send({ msg: 'Internal server error' });
};