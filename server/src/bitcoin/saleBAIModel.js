
//--------------------------------This is model of data inserting in db when user sale token against USD---------------------------
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
    status:Number,
    UsdAmount:Number,
    sentBai:Number,
    email:{ type: String, maxlength: 255, required: true,match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'] },
    txId:String,
    multiAddress:String
})

module.exports = mongoose.model('saleBAIByPaypal', User);
