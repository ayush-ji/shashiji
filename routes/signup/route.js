const express = require('express')
const bcrypt = require('bcrypt')
const route =  express.Router();

// TESTING PURPOSE
var username = "ayush"
var pass = "password"
var session;

route.get('/', (req, res) => {
    if (session === req.sessionID) res.send("Welcome " + username + "!")
    res.render('screens/signup');
})


route.post('/', async (req, res) => {
    var data = req.body;
    session = req.sessionID;
    if ( data.username === username  && data.pwd === pass) {

    }
    console.log(session);
    res.redirect('/');

    // console.log(data);
    // var hash = await bcrypt.hash(data.pwd, 10);
    // console.log(hash)
})

module.exports = route;