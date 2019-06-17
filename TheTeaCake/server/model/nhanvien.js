var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    json = require('../data/nhanvien');
mongoose.Promise =global.Promise;

var nhanvien = new Schema({
    first_name:String,
    last_name:String,
    start_date: { type : Date, 'default': Date.now },
    title: String,
    image:String
});
var NV = mongoose.model('nhanvien',nhanvien);

module.exports = NV;

// NV.insertMany(json, function(err){
//     if(err) console.log(err);
// })