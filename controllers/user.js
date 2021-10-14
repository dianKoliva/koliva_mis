var express = require('express');
var router = express.Router();

router.get('/users', (req, res) => {
    res.send("no users yet");
})

module.exports = router;