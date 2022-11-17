//--------------------------------This is model of data inserting in db when user sale token against USD---------------------------
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
    id:String,
    walletId:{ type: String, maxlength: 255, required: true },
    name:String,
    type:String,
    unit:String,
    price:Number,
    description:{ type: String, maxlength: 255, required: true },
    fromDate:Number,
    toDate:Number,
    promotionPrice:Number,
    currency:String,
    status:String,
    fileLink:String,
    promotionStatus:String,
    multiAddress:String,

})

module.exports = mongoose.model('assetExchangeModel', User);
