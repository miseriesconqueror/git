const expr = require('express');
const hbs = require('hbs');
const path= require('path');
var app = expr();

app.set('view engine','hbs');
app.set('views',path.join(__dirname,'./templates/views'))
hbs.registerPartials(path.join(__dirname,'./templates/partials'))
app.use(expr.static(path.join(__dirname + '/public')));

app.get('', (req, res) => {
  res.render('admit', {
    title: 'Admit',
    id:'17',
    name: 'Rahul',
    age:'21',
    condition:'stable',
    type:'opd',
    year:'2019'
  });
});

app.get('/admit', (req, res) => {
  res.render('admit', {
    title: 'Admit',
    id:'17',
    name: 'Rahul',
    age:'21',
    condition:'stable',
    type:'opd',
    year:'2019'
  });
});

app.get('/discharge', (req, res) => {
	res.render('discharge', {
    title: 'Discharge',
    id:'17',
    name: 'Rahul',
    age:'21',
    condition:'stable',
    type:'opd',
    year:'2019'
  });
});

app.get('/treatment', (req, res) => {
	res.render('treatment', {
    title: 'Treatment',
    id:'17',
    name: 'Rahul',
    age:'21',
    condition:'stable',
    type:'opd',
    year:'2019'
  });
});

app.get('/admit/icu', (req, res) => {
  res.render('404', {
  errorMessage: 'Icu Page not found'
  })
  })
  
app.get('/treatment/dr.sharma', (req, res) => {
    res.render('404', {
    errorMessage: 'Dr.Sharma Page not found'
    })
    })

app.get('*', (req, res) => {
  res.render('404', {
  errorMessage: 'Page not found.'
  })
  })

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});

