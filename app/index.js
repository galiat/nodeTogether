const motivations = require('motivations');
const pickOne = require('pick-one');
const express = require('express');
const app = express();

app.get("/", function(request, response){
  response.send(pickOne(motivations));
});

module.exports = app