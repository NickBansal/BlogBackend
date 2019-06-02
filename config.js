// eslint-disable-next-line no-undef
let env = process.env.NODE_ENV || 'development';

const config = {
	development: 'mongodb://localhost/nick_bansal_blog',
	test: 'mongodb://localhost:27017/nick_bansal_blog_test',
	production: 'mongodb://Nick:Bansal321@ds263856.mlab.com:63856/nickbansalblog'
};

module.exports = config[env];
