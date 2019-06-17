var mongosee=require('mongoose');
var Schema=mongosee.Schema;
var ObjectId = Schema.Types.ObjectId;
var hoadonSchema=new Schema({
    nguoinhan:String,
    diachi:String,
    ghichu:String,
    sodienthoai:String,
    sanpham:Array,
    ngaydathang:{
        type:Date,
        default:Date.now
    }
})
var HoaDon=mongosee.model('bills',hoadonSchema);
module.exports=HoaDon;