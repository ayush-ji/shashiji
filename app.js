const env = process.env;
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const UserModel = require('./services/database/Schemas/user')

const signupRoute = require('./routes/signup/route')

const app = express();

var resu = mongoose.connect('mongodb+srv://ayushji:Ayush16375@cluster0.oaoyg.mongodb.net/?retryWrites=true&w=majority').then( r => { console.log("done!") });


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static('public'))

app.use('/signup', signupRoute)

app.get('/', (req, res) => {
  res.send('Hello')
  var xx = new UserModel({name : "Ayush"}).save().then( r  =>  console.log('data saved')).catch( e  => console.log('cannot save data'))
})

app.use('*', (req, res) => {
  res.send('hello')
})

app.listen(3000, () => {
  console.log('APP STARTED');
  console.log(resu)
})