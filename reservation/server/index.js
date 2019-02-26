const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const {Reservation} = require('../db/index.js');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname + '/../client/dist')));

app.get('/reservation', (req, res) => {
  Reservation.find({}, (err, data) => {
    console.log(data);
    err ? console.error(err) : res.status(200).send(data);
  })
});

app.get('/:propertyid', (req, res) => {
  res.sendFile(path.join(__dirname + '/../client/dist/index.html'));
});

app.get('/reservation/:propertyid', (req, res) => {
  Reservation.find({propertyid: req.params.propertyid}, (err, data) => {
    err ? console.error(err) : res.status(200).send(data);
  })
});

app.listen(port, () => console.log(`listening on port ${port}`));
