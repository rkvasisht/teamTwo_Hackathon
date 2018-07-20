require('dotenv').config();
const express = require('express');
const bp = require('body-parser');
const ejsLayouts = require('express-ejs-layouts');
const port = process.env.PORT || 3000;
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/static'));
app.use(bp.urlencoded({extended: true}));
app.use(ejsLayouts);

app.get('/', (req, res) => {
	res.render('index');
});

<<<<<<< HEAD
=======

>>>>>>> 7ae935f6d3be182b62a8729a522c88d18854b147
app.get('/signup', (req, res) => {
	res.render('signup');
});

app.get('/login', (req, res) => {
	res.render('login');
})

app.get('/account', (req, res) => {
	res.render('account');
})

<<<<<<< HEAD
=======

>>>>>>> 7ae935f6d3be182b62a8729a522c88d18854b147
app.listen(port, function() {console.log('Hooked on ' + port)});
