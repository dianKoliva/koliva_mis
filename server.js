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

require('dotenv').config();
require("./db/db");


const { version } = require('mongoose');




app.use(morgan('dev'))
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors());


app.use('/user', users);
app.use('/form', form);





const options ={
    definition:{
        openapi:"3.0.0",
        info:{
            title:"KM API",
            version:"1.0.0",
            description:"Apis for Koliva motors"
        },
        servers:[
            {
                url:"http//localhost:4000"
            }
        ]
       
    },
    apis:["./routes/*.js"]
}

const specs= sDoc(options);

app.use("/api-docs", sUI.serve,sUI.setup(specs))


app.listen(port, () => {
 console.log(`Running on port: ${port}`)
})

app.use((req,res,next)=>{
    const error =new Error("Route not found");
   
    next(error)
})
