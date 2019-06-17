var express=require('express');
var router=express.Router();
var Bill=require('../model/hoadon');
router.post('/save',(req,res)=>{
    const bill=new Bill({
        nguoinhan:req.body.user,
        diachi:req.body.address,
        ghichu:req.body.desc,
        sodienthoai:req.body.phone,
        sanpham:req.body.sanpham
    })
    bill.save((err,docs)=>{
       if(err) throw err;
     
       res.json(docs);
   })
})
module.exports=router;