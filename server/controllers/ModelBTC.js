//-----------This model create table in db in which we are storing updated value of btc and then getting first 30 days rate of btc-----
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var BTCSchema = new Schema({
    Name: String,
    Price: Number,
    UpdatedOn: Date
})

module.exports = mongoose.model('BTCRate', BTCSchema);
