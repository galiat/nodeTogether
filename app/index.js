const motivations = require('motivations');
const pickOne = require('pick-one');

const express = require('express');
const exphbs  = require('express-handlebars');

const app = express();

app.use(express.static('./app/public'));

app.engine('handlebars', exphbs({
  defaultLayout: 'main',
  layoutsDir:'./app/views/layouts'
}));

app.set('view engine', 'handlebars');
app.set('views', './app/views');

app.get("/", function(request, response){
  var motivation = pickOne(motivations);
  var image = "";
  response.render('motivation', { motivation, image });
});

module.exports = app