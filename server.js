const express = require('express')
const app = express()
const port = 3000

app.get('*', (req, res) => {
	console.log('================================================');
	console.log(req.method, req.url);
	Object.keys(req.headers).forEach(key => {
		console.log(`${key}: ${req.headers[key]}`);
	});
	res.send('Hello World!');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
