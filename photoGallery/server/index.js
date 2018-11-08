const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const Photos = require('../db/index.js');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../client/dist'));

app.get('/:propertyId', function(req, res) {
  res.sendFile(path.join(__dirname + '/../client/dist/index.html'));
});

app.get('/photos/:propertyId', function(req, res) {
  Photos.find({propertyId: req.params.propertyId}, function(err, data) {
    if (err) {
      res.send(500, 'Error retrieving photos');
    } else {
      res.json(data);
    }
  });
});

var port = 8081;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
