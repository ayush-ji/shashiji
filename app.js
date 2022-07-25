const env = process.env;

const express = require('express');

const app = express();

app.use('view engine', 'ejs');

app.get('/', (req, res) => {
  res.send('Hello From Nodejs ji')
})

app.listen(env['PORT'], () => {
  console.log('APP STARTED');
})