const express = require('express')
const bcrypt = require('bcrypt')
const route =  express.Router();

// TESTING PURPOSE
var username = "ayush"
var pass = "password"
var session;

route.get('/', (req, res) => {
    if (session === req.sessionID) res.send("Welcome " + username + "!")
    else res.render('screens/signin');
})


route.post('/', async (req, res) => {
    var data = req.body;
    if ( data.username === username  && data.pwd === pass) {
    session = req.sessionID;
    }
    console.log(session);
    res.redirect('/signin');

    // console.log(data);
    // var hash = await bcrypt.hash(data.pwd, 10);
    // console.log(hash)
})

module.exports = route;