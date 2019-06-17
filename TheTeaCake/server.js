require('./server/bin/connectDB');
var express = require('express');
// var path = require('path');
var session = require('express-session');
var bodyParser = require('body-parser');
// var passport = require('passport');
// var LocalStrategy = require('passport-local').Strategy;
// var bCrypt = require('bcryptjs');
// var flash = require('connect-flash')
var product = require('./server/routes/product');
var blog = require('./server/routes/blog');
var nhanvienRouter = require('./server/routes/nhanvien');
var account = require('./server/routes/account');
var bill=require('./server/routes/hoadon');
var app = express();

app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true
}))
app.use(bodyParser.json({ limit: '50mb' }));
app.use('/api/products', product);
app.use('/api/blogs', blog);
app.use('/api/nhanviens', nhanvienRouter);
app.use('/api/account/', account);
app.use('/api/bills', bill);
// app.use(passport.initialize());
// app.use(passport.session());
module.exports = app;