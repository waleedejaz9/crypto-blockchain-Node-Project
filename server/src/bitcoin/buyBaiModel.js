
//--------------------------------This is model of data inserting in db when user buy token---------------------------
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BTCSellSchema = new Schema({
    sentBai:Number,
    status:String,
    txID:String,
    receivedBtc:Number,
    multiAddress:String,
})

module.exports = mongoose.model('BaiBuyToken', BTCSellSchema);
