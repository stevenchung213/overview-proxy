const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.resolve(__dirname + '/../dist')));
app.use(express.static(__dirname + '/../dist/'));

let port = 5001;

app.get('/:id', (req, res) => {
	res.sendFile(path.resolve(__dirname + '/../dist/index.html'));
});

// app.get('/homes/:id', (req, res) => {
// 	console.log('req.params.urlId is ', req.params.id)
// 	Galleries.find({id: req.params.id}, (err, data) => {
// 		console.log('data is ', data);
// 		if (err) {
// 			console.log("Error: ", err);
// 		} else {
// 			res.status(200).send(data);
// 		}
// 	})
// });


app.listen(port, () => {
	console.log(`listening on port ${port}`);
});



