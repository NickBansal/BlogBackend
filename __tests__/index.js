/* eslint-disable no-console */
/* eslint-disable no-undef */
process.env.NODE_ENV = 'test';
const app = require('../');
const request = require('supertest')(app);
const mongoose = require('mongoose');
const { expect } = require('chai');
const seedDB = require('../seed/seed');
const blogs = require('../seed/testData');

let testFilePath = null;

describe('/', () => {
	let blogsDocs;
	beforeEach(() => {
		return seedDB(blogs)
			.then(docs => {
				blogsDocs = docs;
			})
			.catch(console.log);
	});
	after(() => mongoose.disconnect());

	it('returns a 200 on the route page', () => {
		return request.get('/')
			.expect(200);
	});

	describe('/wrongurl', () => {
		it('GET returns 404 error when passed a wrong url', () => {
			return request.get('/wrongurl')
				.expect(404)
				.then(res => {
					expect(res.body.msg).to.equal('/wrongurl does not exist');
				});
		});
	});

	describe.only('/blogs', () => {
		it('GET return a 200 on the blogs route', () => {
			return request.get('/blogs')
				.then(res => {
					expect(res.status).to.equal(200);
				});
		});
		it('POST returns a new object and 200 status', (done) => {
			return request.post('/blogs')
				.field('Content-Type', 'multipart/form-data')
				.attach('postImage', `${__dirname}/images/test-image.png`)
				.end((err, res) => {
					if (err) {
						console.log(err);
					} else expect(res.status).to.equal(200);
					done();
				});

		});
		it.skip('POST returns an error when post fields are missing', () => {
			return request.post('/blogs')
				.send({
					title: 'new article'
				})
				.expect(400)
				.then(res => {
					expect(res.body.msg).to.equal('Bad request');
				});
		});
	});
	describe('/blogs/:blog_id', () => {
		it('GET returns a 400 for a wrong blog id', () => {
			return request.get('/blogs/41224d776a326fb40f000001')
				.expect(400)
				.then(res => {
					expect(res.body.msg).to.equal('Blog not found');
				});
		});
		it('GET returns a 204 for a correct blog id', () => {
			return request.delete(`/blogs/${blogsDocs[0].id}`)
				.expect(204);
		});

		it('GET returns a 400 for an incorrect blog id', () => {
			return request.delete('/blogs/41hfhfg55')
				.expect(400)
				.then(res => {
					expect(res.body.msg).to.equal('Bad request');
				});
		});
	});
});

