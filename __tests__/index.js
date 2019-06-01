/* eslint-disable no-console */
/* eslint-disable no-undef */
process.env.NODE_ENV = 'test';
const app = require('../');
const request = require('supertest')(app);
const seedDB = require('../seed/seed');
const { expect } = require('chai');
const blogs = require('../seed/testData');

describe('/', () => {
	let blogsDocs;
	beforeEach(() => {
		return seedDB(blogs)
			.then(docs => [blogsDocs] = docs)
			.catch(console.log);
	});
	after(() => mongoose.disconnect());

	it('returns a 200 on the API route page', () => {
		return request.get('/')
			.expect(200);
	});
});

