/* eslint-disable no-console */
/* eslint-disable no-undef */
// const { test } = require('../config');
const DB_URL = require('../config');
const app = require('../');
const request = require('supertest')(app);
const mongoose = require('mongoose');
const { expect } = require('chai');
const seedDB = require('../seed/seed');
const blogs = require('../seed/testData');

describe('/', () => {
	let blogsDocs;
	beforeEach(() => {
		mongoose.connect(DB_URL, { useNewUrlParser: true })
			.then(() => seedDB(blogs))
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

	describe('/blogs', () => {
		it('GET return a 200 on the blogs route', () => {
			return request.get('/blogs')
				.expect(200);
		});
		it('POST returns a new object and 200 status', () => {
			return request.post('/blogs')
				.send({
					title: 'new article',
					body: 'This is my new article content',
					image: 'image.jpg'
				})
				.expect(200)
				.then(res => {
					expect(res.body).to.have.property('image');
					expect(res.body).to.be.an('object');
					expect(res.body.title).to.equal('new article');
					expect(res.body.body).to.equal('This is my new article content');
				});
		});
		it('POST returns an error when post fields are missing', () => {
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
			return request.get('/blogs/wrong_id')
				.expect(400)
				.then(res => {
					expect(res.body.msg).to.equal('Bad request');
				});
		});
		it('GET returns a 200 for a correct blog id', () => {
			return request.get(`/blogs/${blogsDocs[0][0].id}`)
				.expect(200);
		});
	});


});

