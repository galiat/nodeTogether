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
  const catImageFiles = [1, 2, 3, 4, 5, 6];

  var motivation = pickOne(motivations);
  var image = pickOne(catImageFiles)

  response.render('motivation', { motivation, image });
});

module.exports = app