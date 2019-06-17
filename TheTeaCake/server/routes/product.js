var express = require('express'),
    app = express(),
    product = require('../model/sanpham'),
    typeProd = require('../model/loai_sanpham');
    multer = require('multer');

// MULTER
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'client/public/images')
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname)
    }
});
var upload = multer({storage: storage});

// GET
app.get('/', (req, res)=>{
    product.find({})
            .populate({path: 'product_type_id'})
            .exec(function(err,doc){
                if(err) console.log(err);
              
                res.json(doc);
            })
})
app.get('/get/:id', (req, res) =>{
    product.findById({_id: req.params.id })
            .exec(function(err, doc){
                if(err) throw err;
                res.json(doc);
            })
})
app.get('/getType', (req, res)=>{
    typeProd.find({})
            .populate({ path : 'products',})
            .exec(function(err, type){
                if(err) throw err;
                res.json(type);
            })
})
app.get('/getByType/:id', (req, res)=>{
    typeProd.findOne({ _id: req.params.id })
            .populate('products')
            .exec(function(err , type){
                if(err) throw err;
                res.json(type.products);
            })
})
// POST
app.post('/search', (req, res) => {
    product.find({ name: new RegExp(req.body.name, 'i') })
            .populate({ path: 'product_type_id'})
            .exec(function(err, doc){
                if(err) console.log(err);
                
                res.json(doc);
            })
})
app.post('/', upload.single('image'), (req, res)=>{
    var prod = new product({  
        "name": req.body.name,
        "describe": req.body.describe,
        "product_type_id" : req.body.type,
        "price": req.body.price,
    })
    if(req.file) {
        var prod = new product({  
            "name": req.body.name,
            "describe": req.body.describe,
            "product_type_id" : req.body.type,
            "price": req.body.price,
            "image": "../images/" + req.file.originalname
        })
    }
    prod.save(function(err){
        if(err) res.json('Add error !!');
        res.json('Add success !!');
    })
})
// PUT
app.put('/', upload.single('image'), (req, res) => {
 
    var data = {  
        "name": req.body.name,
        "describe": req.body.describe,
        "product_type_id" : req.body.type,
        "price": req.body.price,
    }
    if(req.file) {
        var data = {  
            "name": req.body.name,
            "describe": req.body.describe,
            "product_type_id" : req.body.type,
            "price": req.body.price,
            "image": "../images/" + req.file.originalname
        }
    }

    product.findByIdAndUpdate(req.body._id,data,{new: true},(err) => {
        if(err) res.json(err);
       res.json("Update success !!");
    })
})
// PATCH

// DELETE
app.delete('/:id', (req, res)=>{
   
    product.deleteOne({_id : req.params.id},function(err){
        if(err) throw err;
        res.json('Delete success !!?');
    })
})

module.exports = app;