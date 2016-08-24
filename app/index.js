const motivations = require('motivations');
const express = require('express');
const app = express();

app.get("/", function(request, response){
  response.send(motivations);
});

module.exports = app