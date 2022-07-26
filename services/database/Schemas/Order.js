const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Order = new Schema(
    {
        time : Date,
        address : String,
    }
)

module.exports = new mongoose.model('order', Order);
