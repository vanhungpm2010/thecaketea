var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise =global.Promise;
var ObjectId= Schema.Types.ObjectId,
    json = require('../data/loaiSP');

var loai_sanpham = new Schema({
    type_product:String,
    products:[{ type: ObjectId, ref: 'sanpham'}]
});
var loaiSP = mongoose.model('loai_sanpham',loai_sanpham);
module.exports = loaiSP;

// loaiSP.insertMany(json, function(err){
//     if(err) console.log(err);
// })