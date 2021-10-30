var express = require('express');
var router = express.Router();
var Form = require('../models/preformModel');


const formControl=require("../controllers/preform.js")

const checker=require("../middle/check");

router.get("/",formControl.getAll);
router.get("/:id",formControl.getById)
router.post("/register",formControl.saveForm)
router.put("/update/:id",formControl.update);
router.delete("/delete/:id",formControl.deleteById);




module.exports = router;