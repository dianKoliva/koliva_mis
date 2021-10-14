const { response } = require('express');
var express = require('express');
var router = express.Router();
var User = require('../models/userModel');

router.get('/', (req, res) => {
    res.send("no users yet");
})

router.post('/signup', (req, res) => {

    var user_instance = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })

    user_instance.save(function(err) {
        if (err) console.log(err);

    });

})

router.post('/login', (req, res) => {

    var email = req.body.email;
    var password = req.body.password;

    user = User.findOne({
            email: email,
        })
        // res.send(JSON.stringify({ user: user }));

    console.log(user);

})
router.put('/', (req, res) => {
    console.log(req.body);
});

router.delete('/', (req, res) => {
    console.log("No way");
})

module.exports = router;