var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise =global.Promise;
var json = require('../data/loaikhachhang.json');
var loai_khachhang = new Schema({
   type:String,
   id_cus:String
});
var loaiKH = mongoose.model('loai_khachhang',loai_khachhang);
module.exports = loaiKH;
// loaiKH.insertMany(json, function(err){
//     if(err) console.log(err);
// })