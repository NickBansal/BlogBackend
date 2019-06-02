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
			.then(docs => [blogsDocs] = docs)
			.catch(console.log);
	});
	after(() => mongoose.disconnect());

	it('returns a 200 on the API route page', () => {
		return request.get('/')
			.expect(200);
	});

	describe('/wrongurl', () => {
		it('GET returns 404 error when passed a wrong url', () => {
			return request.get('/wrongurl')
				.expect(404)
				.then(res => {
					console.log(res);
					expect(res.body.msg).to.equal('/wrongurl does not exist');
				});
		});
	});
});

