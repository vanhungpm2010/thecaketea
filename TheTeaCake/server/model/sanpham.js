var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise =global.Promise;
var ObjectId = Schema.Types.ObjectId,
    json = require('../data/sanpham');

var sanpham = new Schema({
    name: String,
    describe: String,
    product_type_id: { type: ObjectId, ref: 'loai_sanpham'},
    price: Number,
    image: String
});
var sp = mongoose.model('sanpham',sanpham);
module.exports = sp;

// sp.insertMany(json, function(err){
//     if(err) console.log(err);
// })