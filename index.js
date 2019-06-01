/* eslint-disable no-console */
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const DB_URL = require('./config');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Schema, model } = mongoose;

mongoose.connect(DB_URL, { useNewUrlParser: true })
	.then(console.log(`Database is running on ${DB_URL}`));

app.set('view engine', 'ejs');
app.use(cors());
app.use(express.static('public'), bodyParser.json());

const blogSchema = new Schema({
	title: { type: String, required: true },
	image: { type: String, required: true },
	body: { type: String, required: true },
	created: { type: Date, default: Date.now }
});

const Blog = model('Blog', blogSchema);

Blog.create({
	title: 'Test blog',
	image: 'https://drawingpenciled.com/library/3197142/top-10-cutest-cat-breeds-these-cats-are-just-generally-beautiful-they-have-long-shiny-fluffy-coats-and-are-just-pretty-cats-plus-they-look-super-cuddly-like-they-might-purr.jpg',
	body: 'Test blog body'
});
module.exports = app;