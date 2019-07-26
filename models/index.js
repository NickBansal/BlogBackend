const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const blogSchema = new Schema({
	title: { type: String, required: true },
	image: { type: String },
	body: { type: String, required: true },
	created: { type: Date, default: Date.now },
	category: { type: String, required: true },
	edited: { type: Boolean, default: false }
});

module.exports = model('Blog', blogSchema);