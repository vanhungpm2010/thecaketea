var express = require('express'),
    app = express(),
    multer = require('multer'),
    Blog = require('../model/blog');

// MULTER
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'client/public/images/blog')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
});
var upload = multer({ storage: storage });
// GET
app.get('/', (req, res) => {
    Blog.find({})
        .then(blog => {
        
            res.json(blog)
        })
        .catch(err => { throw err })
})

// POST
app.post('/add', upload.single('image'), (req, res) => {
    var blog = new Blog({
        title: req.body.title,
        content: req.body.content,
        author: req.body.author,
        imageURL: '../images/blog/' + req.file.originalname
    });
    blog.save((err) => {
        if (err) res.json(err);
        else res.json('Add blog success ?!!');
    })
})
// PUT
app.put('/update', upload.single('image'), (req, res) => {

    var data = {
        title: req.body.title,
        content: req.body.content,
        author: req.body.author
    }
    if (req.file) {
        data = {
            title: req.body.title,
            content: req.body.content,
            author: req.body.author,
            imageURL: '../images/blog/' + req.file.originalname
        }
    }

    Blog.findByIdAndUpdate({ _id: req.body.id }, data, { new: true, useFindAndModify: false }, (err) => {
        if (err) throw err;
        else res.json('Update blog');
    })
})
// Delete
app.delete('/:id', (req, res) => {
    Blog.deleteOne({ _id: req.params.id }, (err) => {
        if (err) res.json({ success: 'Delete Error !!' });
        else res.json({ success: 'Delete Success !!' });
    })
})
module.exports = app;