const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home', {
    name: 'Andy',
    title: 'Curso de Node',
  });
});

app.get('/generic', (req, res) => {
  res.render('generic', {
    name: 'Andy',
    title: 'Curso de Node',
  });
});

app.get('/elements', (req, res) => {
  res.render('elements', {
    name: 'Andy',
    title: 'Curso de Node',
  });
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
