var mongoose = require('mongoose');
var Schema = mongoose.Schema;
    mongoose.Promise =global.Promise,
    json = require('../data/user');

var user = new Schema({
    email: String,
    password: String
});
var User = mongoose.model('user',user);
module.exports = User;

// User.insertMany(json, function(err){
//     if(err) console.log(err);
// })