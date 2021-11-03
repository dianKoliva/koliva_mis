var express = require('express');
var router = express.Router();
var User = require('../models/userModel');


const userControl=require("../controllers/user.js")

const checker=require("../middle/check")


router.post('/signup',userControl.signUp )

router.post("/login",userControl.login)


router.get('/',checker,userControl.getAllUsers )
router.get('/:id',checker, userControl.getById)
router.put("/:id",checker,userControl.update)
router.delete("/:id",checker,userControl.deleteById);



module.exports = router;