var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.send("no users yet");
})

router.post('/', (req, res) => {
    console.log(req);
})

module.exports = router;