const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const utils = require('./utils');

const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));
app.use(express.json());

app.get('/api/ipsum', (req, res) => {
	const count = req.query.count;
	let start = 1;
	let response = '';
	while (start <= count) {
		response += `<p>${utils.createParagraph()}</p>`;
		start++;
	}
	res.json(response);
});

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`App is listening on port ${port}`);
