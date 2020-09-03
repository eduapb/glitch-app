// server.js
// where your node app starts

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const userRoutes = require('./src/routes');
const { startRequestDelivery } = require('./src/services/wishes-deliver.service');
const app = express();

app.use(bodyParser());
app.use(morgan());

// This is the point of entrance for the Back End logic.
// In this simple case we do not have the need to do this, however,
// having the folder structure like this allows us to easily maintain and fix bugs.
// app.use(bodyParser);
app.use('/api', userRoutes);

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/*', (request, response) => {
  response.sendFile(__dirname + '/views/index.html');
});

// Pending requests are stored here
global.pendingRequests = [];

// Start Requests Delivery service
startRequestDelivery();

// listen for requests :)
const listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
