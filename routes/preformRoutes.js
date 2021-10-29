var express=require("express");
var router=express.Router;
var cheker=require("../middle/check")



router.get("/");
router.get("/:id");
router.post("/register");
router.put("/update");



module.exports=router