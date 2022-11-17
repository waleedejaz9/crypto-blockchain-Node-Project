
//--------------------------------This is model of data inserting in db when user sell token---------------------------
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BTCSellSchema = new Schema({
    amount: Number,
    status: Number,
    txID:String,
    BTCPrice:String,
    bitcoinAddress:String
})

module.exports = mongoose.model('BitcoinSellToken', BTCSellSchema);
