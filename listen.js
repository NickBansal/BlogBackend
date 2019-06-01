/* eslint-disable no-console */
const app = require('.');

const port = 8000;

app.listen(port, () => {
	console.log(`Listening on server ${port}`);
});
