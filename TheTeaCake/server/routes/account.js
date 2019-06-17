var express = require('express')
app = express()
User = require('../model/user')
//
app.get('/', (req, res) => {
    User.find({}).exec(function (err, user) {
            if (err) console.log(err);
            res.json(user);
         
        })
})
app.post('/dangnhap', function(req, res)
{
    var email = req.body.email;
    var matkhau = req.body.password;
    console.log(email);
    console.log(matkhau);
    var success = 'error';
    User.findOne({email:email})
        .exec(function(err, user)
        {
            if(err) console.log(err)
            console.log(user.password);
            if(user.password===matkhau){
                console.log("1");
                success = 'success';
            }
            console.log("2");
            res.status(200).json(success);

        })
})
module.exports = app;