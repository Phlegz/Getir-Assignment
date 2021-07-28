const express        = require('express');
const bodyParser     = require('body-parser');
const recordsRoutes = require('./routes/records');

const app = express();

app.use(bodyParser.json());

app.use('/records', recordsRoutes);

//Error handler
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Oops! Something went wrong, please try again.');
})

module.exports = app;

