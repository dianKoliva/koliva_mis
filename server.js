const express = require('express');
const app = express();
const port = 4590;
const bodyParser = require("body-parser");
const morgan =require( "morgan")
require('dotenv').config();
require("./db/db");



var users = require("./controllers/user.js");




app.use(morgan('dev'))
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use('/user', users);


app.use((req,res,next)=>{
    const error =new Error("Route not found");
   
    next(error)
})




app.listen(port, () => {
 console.log(`Running on port: ${port}`)
})