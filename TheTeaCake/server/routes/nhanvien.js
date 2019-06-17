var express = require('express'),
    app = express(),
    multer = require('multer'),
    Nhanvien = require('../model/nhanvien');
    
//Multer
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'client/public/images')
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname)
    }
});
var upload = multer({storage: storage});
    //Get
app.get('/', (req, res) => {
    Nhanvien.find({})
        .then(nv => {
            console.log(nv)
            res.json(nv)
        })
        .catch(err => { throw err })
})
app.get('/get/:id', (req, res)=>{
    Nhanvien.findById({_id:req.params.id}).exec(function(err, doc)
    {
        if(err) throw err;
        res.json(doc)
    })
})
//Search 
app.post('/search',(req,res)=>{
    Nhanvien.find({name:new RegExp(req.body.name,'i')}).exec(function(err, doc)
    {
        if(err) throw err;;
        res.json(doc)
    })
})
//POST
app.post('/', upload.single('image'), (req, res)=>{
    var nv = new Nhanvien({
        "first_name":req.body.fname,
        "last_name":req.body.lname,
        "start_date":req.body.date,
        "title": req.body.title,
    })
    if(req.file) {
        var nv = new Nhanvien({
            "first_name":req.body.fname,
            "last_name":req.body.lname,
            "start_date":req.body.date,
            "title": req.body.title,
            "image": "../images/" + req.file.originalname
        })
    }
    nv.save(function(err){
        if(err) res.json('Add error !!');
        res.json('Add success !!');
    })
})
// PUT
app.put('/', upload.single('image'),(req,res)=>{
    var data = {
        "first_name":req.body.fname,
        "last_name":req.body.lname,
        "start_date":req.body.date,
        "title": req.body.title,
    }
    if(req.file)
    {
        var data = {
            "first_name":req.body.fname,
            "last_name":req.body.lname,
            "start_date":req.body.date,
            "title": req.body.title,
            "image": "../images/" + req.file.originalname
        }
    }
    Nhanvien.findByIdAndUpdate(req.body._id,data,{new:true},(err)=>{
        if(err) res.json(err);
        res.json('Update Successful!')
    })
})
//DELETE
app.delete('/:id',(req,res)=>{
    Nhanvien.deleteOne({_id:req.params.id},function(err)
    {
        if(err) throw err;
        res.json('Delete Successful!')
    })
})
module.exports = app;