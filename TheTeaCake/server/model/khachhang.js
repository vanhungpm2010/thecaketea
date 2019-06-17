var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise =global.Promise;
var json = require('../data/khachhang.json');

var khachhang = new Schema({
    name: String,
    address: String,
    phone: String,
    email: String,
    birtday : Date,
    cus_type_id: String,
    gender: Boolean

});
var kh = mongoose.model('khachhang',khachhang);
module.exports = kh;

// kh.insertMany(json, function(err){
//     if(err) console.log(err);
//     console.log("Khach hang");
// })