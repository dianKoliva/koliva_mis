const express = require('express');
const app = express();
const port = 4000;
const bodyParser = require("body-parser");
const morgan =require( "morgan")
const sUI =require('swagger-ui-express');
const sDoc=require('swagger-jsdoc');
const cors =require('cors');
var form=require("./routes/preformRoutes")
var users = require("./routes/userRoutes.js");
const swaggerDocument = require("./swagger.json");

require('dotenv').config();
require("./db/db");

app.use("/api-docs",sUI.serve, sUI.setup(swaggerDocument));

const { version } = require('mongoose');

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors());


app.use('/km/users', users);
app.use('/km/forms', form);







app.listen(port, () => {
 console.log(`Running on port: ${port}`)
})

app.use((req,res,next)=>{
    const error =new Error("Route not found");
   
    next(error)
})
