const express = require('express');
const app = express();
const port = 4590;
const bodyParser = require("body-parser");






require("./db/db");
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());



var users = require("./controllers/user.js");


app.use('/user', users);



app.listen(port, () => {

})