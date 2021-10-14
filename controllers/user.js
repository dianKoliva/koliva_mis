var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.send("no users yet");
})

router.post('/', (req, res) => {
    console.log(req.body);
})
router.put('/', (req, res) => {
    console.log(req.body);
});

router.delete('/', (req, res) => {
    console.log("No way");
})

module.exports = router;