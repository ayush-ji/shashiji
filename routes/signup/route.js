const express = require('express')
const bcrypt = require('bcrypt')
const route =  express.Router();

route.get('/', (req, res) => {
    res.render('screens/signup');
})

route.post('/', async (req, res) => {
    var data = req.body;

    console.log(data);
    var hash = await bcrypt.hash(data.pwd, 10);
    console.log(hash)
})

module.exports = route;