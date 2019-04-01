const express = require('express');
const hbs = require('hbs');

var app = express();

//Middleware

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
 return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
return text.toUpperCase();
});

app.get('/', (req, res) => {
 //res.send('<h1>Hello Express!!!!</h1>');
 res.render('home.hbs', {
   pageTitle: 'About Page',
   welcome: 'Welcome to the world of Express and hbs',
   
 });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page',
    
  });

});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Could not render the route'
  });
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});