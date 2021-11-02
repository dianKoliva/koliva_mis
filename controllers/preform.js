const bcrypt = require('bcrypt')
const mongoose= require('mongoose');
const { response, request } = require('express');
const jwt=require("jsonwebtoken");
var Form = require('../models/preformModel');

const checker=require("../middle/check")

exports.getAll=(checker,req, res,next) => {

    const pre= Form.find()
    .exec()
    .then(
        ans=>{
                res.json({
                    forms:ans
                })
           
            
        }
    
)
.catch(
    err=>{
 
        res.status(500).json({
            error:err.message
        })
    }

)
    
}

exports.saveForm=(checker,req, res,next) => {

const form =new Form({
    _id:new mongoose.Types.ObjectId(),

    plate_no: req.body.plate_no,
    type: req.body.type,
    brand: req.body.brand,
    chassis_no:req.body.chassis_no,

    chassis_quantity:req.body.chassis_quantity,
    screw_quantity:req.body.screw_quantity,
    baguette_quantity:req.body.baguette_quantity,
    disk_quantity:req.body.disk_quantity,
    paint_quantity:req.body.paint_quantity,
    ressort_quantity:req.body.ressort_quantity,

    chassis_up:req.body.chassis_up,
    screw_up:req.body.screw_up,
    baguette_up:req.body.baguette_up,
    disk_up:req.body.disk_up,
    paint_up:req.body.paint_up,
    ressort_up:req.body.ressort_up,
    total:req.body.total
})
            

form .save()
.then(result=>{
 res.status(201).json({
  message:"Form Created"  }) })

 .catch(
err=>{
res.status(500).json({ error:err.message  }) } )

}

exports.getById=(checker,req, res,next) => {

  

    const form= Form.findById(req.params.id)
    .exec()
    .then(
        ans=>{
            res.json({
                users:ans
            })
        }
)
.catch(
    err=>{
        res.status(500).json({
            message:"user not found"
        })
    }

)
    
}

exports.update=(checker,req,res,next)=>{
    var id=req.params.id;
    const form= Form.findById(req.params.id)
    .exec()
    .then(
        
        resp=>{
                let updateOps={};
    const body=req.body;
 
    for(const ops in body){
        updateOps[ops]=body[ops];
    }
    
 
    Form.updateOne({_id:id}, {$set:updateOps})
    .exec()
    .then( resp=>{
       res.status(201).json({message:"updated"}) ;
    }
     )
    .catch(
     err=>{
         
         res.status(500).json({
             error:err.message
         })
     }
 
 )
 
        }
        
)
.catch(
    err=>{

        res.status(500).json({
            message:"user not found"
        })
    }
)

        



 }


 exports.deleteById=(req,res,next)=>{


    const form= Form.findById(req.params.id)
    .exec()
    .then(
        ans=>{
              let id=req.params.id;

    Form.remove({
        _id:id
    })
    .exec()
    .then(
        result=>{
            res.status(200).json({message:"deleted"})
        }
       
    )
    .catch(
        err=>{
         
            res.status(500).json({
                error:err.message
            })
        }

    )
        }
)
.catch(
    err=>{
        res.status(404).json({
           error:"user not found"
        })
    }

)



  
}