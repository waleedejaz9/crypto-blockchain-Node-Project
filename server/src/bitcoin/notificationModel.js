
//--------------------------------This is model of data inserting in db when user buy token---------------------------
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var assetNotification = new Schema({
    Notification:String,
    from: { type: String, maxlength: 255, required: true },
    to: { type: String, maxlength: 255, required: true },
    createdAt: { type: String, maxlength: 255, required: true }

})

module.exports = mongoose.model('assetNotification', assetNotification);
