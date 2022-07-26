const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Orders = require('./Order');

let User = new Schema( {
  username : String,
  hash : String,
  email : String,
  orders : [Orders]
} )

module.exports = new mongoose.model('user', User);
