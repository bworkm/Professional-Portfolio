'use strict';

const pg = require('pg');
const express = require('express');
const PORT = process.env.PORT || 8080;
const app = express();

// NOTE: Routes for requesting HTML resources
app.get('/', function(request, response) {
  response.sendFile('index.html', {root: '.'});
});

app.get('/new', function(request, response) {
  response.sendFile('new.html', {root: '.'});
});




app.listen(PORT, function() {
  console.log(`Server started on port ${PORT}!`);
});
