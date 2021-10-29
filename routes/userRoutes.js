var express = require('express');
var router = express.Router();
var User = require('../models/userModel');


const userControl=require("../controllers/user.js")

const checker=require("../controllers/middle/check")


router.post('/signup',userControl.signUp )

router.post("/login",userControl.login)


router.get('/',userControl.getAllUsers )

router.get('/:id', userControl.getById)




router.put("/update/:id",userControl.update)
router.delete("/delete/:id",userControl.deleteById);



module.exports = router;