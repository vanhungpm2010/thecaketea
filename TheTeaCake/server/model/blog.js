var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise =global.Promise;
var json = require("../data/blog");

var blog = new Schema({
    title   : String,
    content : String,
    author : String,
    imageURL: String

});
var Blog =  mongoose.model('blog',blog);
module.exports = Blog;

// Blog.insertMany(json, function(err){
//     if(err) console.log(err);
// })