const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const blogSchema = new Schema({
	title: { type: String, required: true },
	image: {
		type: String, default: 'https://drawingpenciled.com/library/3197142/top-10-cutest-cat-breeds-these-cats-are-just-generally-beautiful-they-have-long-shiny-fluffy-coats-and-are-just-pretty-cats-plus-they-look-super-cuddly-like-they-might-purr.jpg',
	},
	body: { type: String, required: true },
	created: { type: Date, default: Date.now },
	label: { type: String, required: true }
});

module.exports = model('Blog', blogSchema);