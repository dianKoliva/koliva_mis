var express = require('express');
var router = express.Router();
var Form = require('../models/preformModel');


const formControl=require("../controllers/preform.js")

const checker=require("../middle/check");

router.get("/get",formControl.getAll);
router.post("/register",checker,formControl.saveForm)
router.get("/:id",checker,formControl.getById)

router.put("/:id",checker,formControl.update);
router.delete("/:id",checker,formControl.deleteById);




module.exports = router;