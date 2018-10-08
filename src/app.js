const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();

app.set('view engine', 'ejs'); // Set which view engine to set(pug, ejs)
app.set('views', path.join(__dirname, 'views')); // Set location of view(ejs files)
app.use(express.static(path.join(__dirname, 'public'))); // Set location for static files

app.get('/', (req,res)=>{
    res.render('index', { title : 'Index'});
})

app.listen(3000, () => {
    console.log("PS Project Running on port 3000!");
})