const express = require('express');
const app = express();

app.get("/", function(request, response){
  response.send("HELLO WORD!");
});

module.exports = app