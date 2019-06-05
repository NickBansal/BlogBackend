const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const blogSchema = new Schema({
	title: { type: String, required: true },
	image: {
		type: String, default: 'https://cdn.apk-cloud.com/detail/screenshot/CywQtHxkh92amMh2GbEKKMRaJhJYMEFQpTkCNUXTmP17vzEVitphRBYFB3WvqV2D9Lsw=h900.png'
	},
	body: { type: String, required: true },
	created: { type: Date, default: Date.now },
	label: { type: String, required: true },
	edited: { type: Boolean, default: false }
});

module.exports = model('Blog', blogSchema);