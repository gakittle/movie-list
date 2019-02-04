let express = require('express');
let morgan = require('morgan');
let bodyParser = require('body-parser');
let { queryMovie } = require('./moviedb.js');
const port = 3000;

let app = express();

app.use(express.static(__dirname + '/../public'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));

app.post('/movies', (req, res) => {
  console.log('request incoming: ', req.body);
  queryMovie(req.body.query, (results) => {
    console.log('We found something: ', results);
    res.status(201).send(results);
  });
});

app.listen(port, (err) => {
  if (err) {
    console.error('Error: ', err);
  } else {
    console.log('Listening on Port', port);
  }
});