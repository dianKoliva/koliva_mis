const { response } = require('express');
var express = require('express');
var router = express.Router();
var User = require('../models/userModel');
const jwt=require("jsonwebtoken");
const mongoose= require('mongoose');
const app = express();
const bcrypt = require('bcrypt')




router.get('/', (req, res) => {
    res.send("no users yet");
})

router.post('/signup', (req, res) => {

    bcrypt.hash(req.body.password,10,(err,hash)=>{

        if(err){

            return res.status(500).json({
                error:err
            })
        }
        else{
            const user = new User({

                _id:new mongoose.Types.ObjectId(),
                email:req.body.email,
                password:hash
            });
            user
            .save()
            .then(result=>{
                res.status(201).json({
                    message:"User Created"
                })
            })
            .catch(
                err=>{
                    console.log(err);
                    res.status(500).json({
                        error:err
                    })
                }

            )
        }

    })
  

})

router.post('/login', (req, res) => {

    var email = req.body.email;
    var password = req.body.password;

    user = User.findOne({
            email: email,
        })
        // res.send(JSON.stringify({ user: user }));

    console.log(user);

})
router.put('/', (req, res) => {
    console.log(req.body);
});

router.delete('/', (req, res) => {
    console.log("No way");
})

module.exports = router;