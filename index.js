const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//=========
// SETTINGS
//=========
const port = process.env.PORT || 3000;
//set view engine
app.set("view engine", "ejs");

//set body-parser
app.use(bodyParser.urlencoded({extended:true}));

//set static dir
app.use(express.static(__dirname + '/public'));

//=========
// ROUTERS
//=========
app.get('/', (req, res) => {
  res.render('index')
});

app.get('/test', (req, res) => {
  res.render('test')
});

app.get('/login', (req, res) => {
  res.render('login')
});

app.get('/register', (req, res) => {
  res.render('register')
});

app.get('/customer/customer-store', (req, res) => {
  res.render('/customer/customer-store')
});

app.get('*', (req, res) => {
  res.render('404')
});
//=========
// SERVER
//=========
app.listen(port);
console.log(`Server is running on http://localhost:${port}`);