const env = process.env;
const path = require('path');
const express = require('express');
const mongoose = require('mongoose')

var resu = 
mongoose.connect('mongodb+srv://ayushji:Ayush16375@cluster0.oaoyg.mongodb.net/?retryWrites=true&w=majority').then( r => { console.log("done!") });



const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('screens/home');
})

app.listen(env['PORT'], () => {
  console.log('APP STARTED');
  console.log(resu)
})