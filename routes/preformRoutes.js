var express = require('express');
var router = express.Router();
var Form = require('../models/preformModel');


const formControl=require("../controllers/preform.js")

const checker=require("../middle/check");

router.get("/",checker,formControl.getAll);
router.get("/:id",checker,formControl.getById)
router.post("/register",checker,formControl.saveForm)
router.put("/update/:id",checker,formControl.update);
router.delete("/delete/:id",checker,formControl.deleteById);




module.exports = router;