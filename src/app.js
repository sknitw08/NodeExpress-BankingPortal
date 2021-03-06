const fs = require('fs');
const path = require('path');
const express = require('express');
const accountRoutes = require('./routes/accounts');
const servicesRoutes = require('./routes/services');

const { accounts, users, writeJSON } = require('./data');

const app = express();

app.set('view engine', 'ejs'); // Set which view engine to set(pug, ejs)
app.set('views', path.join(__dirname, 'views')); // Set location of view(ejs files)
app.use(express.static(path.join(__dirname, 'public'))); // Set location for static files
app.use(express.urlencoded({extended:true}));

app.use('/account', accountRoutes);
app.use('/services', servicesRoutes);

app.get('/', (req,res)=>{
    res.render('index', { 
        title : 'Account Summary',
        accounts
    });
});

app.get('/profile', (req,res) => {
    res.render('profile', { user : users[0] });
});

app.listen(3000, () => {
    console.log("PS Project Running on port 3000!");
})