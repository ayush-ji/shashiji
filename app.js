require('dotenv').config();
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const sessions = require('express-session')
const UserModel = require('./services/database/Schemas/user')
const cookieParser = require('cookie-parser')

const signupRoute = require('./routes/signup/route')
const signinRoute = require('./routes/signin/route');

const app = express();

var resu = mongoose.connect('mongodb+srv://ayushji:Ayush16375@cluster0.oaoyg.mongodb.net/?retryWrites=true&w=majority').then( r => { console.log("done!") });

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static('public'))
app.use(cookieParser());
const oneDay = 1000 * 60 * 60 * 24;
app.use(sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false 
}));

app.use('/signup', signupRoute)
app.use('/signin', signinRoute)

app.get('/', (req, res) => {
  res.send('Hello')
  //var xx = new UserModel({name : "Ayush"}).save().then( r  =>  console.log('data saved')).catch( e  => console.log('cannot save data'))
})

app.use('*', (req, res) => {
  res.send('hello')
})

app.listen(3000, () => {
  console.log('APP STARTED');
  console.log(resu)
})