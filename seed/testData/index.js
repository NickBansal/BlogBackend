const dummy = require('./dummyBody');
const fs = require('fs');

const base64 = (path) => fs.readFileSync(path, { encoding: 'base64' });

module.exports = [
	{
		'title': 'Living in the shadow of a great man',
		'body': dummy.body1,
		'category': 'Cats',
		'image': base64('uploads/will_haywood_advice_905.jpg')
	},
	{
		'title': '7 inspirational thought leaders from Manchester UK',
		'body': dummy.body2,
		'category': 'Cats',
		'image': base64('uploads/willhaywooddollar_800.jpg')
	},
	{
		'title': 'They\'re not exactly dogs, are they?',
		'body': dummy.body1,
		'category': 'Dogs',
		'image': base64('uploads/willhaywoodhound_700.jpg')
	},
	{
		'title': 'UNCOVERED: catspiracy to bring down democracy',
		'body': dummy.body2,
		'category': 'Lions',
		'image': base64('uploads/willhaywoodhound_700.jpg')
	}
];