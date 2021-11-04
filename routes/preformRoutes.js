var express = require('express');
var router = express.Router();
var form =require("../controllers/preform");


router.post("/registe",form.saveForm)
router.get('/',form.getAll)
router.get('/:id',form.getById)
router.put("/:id",form.update)
router.delete("/:id",form.deleteById);

module.exports=router;