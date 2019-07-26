const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const blogSchema = new Schema({
	title: { type: String },
	image: { type: String },
	body: { type: String },
	created: { type: Date, default: Date.now },
	category: { type: String },
	edited: { type: Boolean, default: false }
});

module.exports = model('Blog', blogSchema);