var User = require('../models/userModel');
const bcrypt = require('bcrypt')
const mongoose= require('mongoose');
const { response } = require('express');
const jwt=require("jsonwebtoken");
exports.getAllUsers=(req, res,next) => {

    const user= User.find()
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
        console.log(err);
        res.status(500).json({
            error:err
        })
    }

)
    
}
exports.getById=(req, res,next) => {

  

    const user= User.findById(req.params.id)
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
        console.log(err);
        res.status(500).json({
            message:"user not found"
        })
    }

)
    
}

exports.signUp=(req, res,next) => {


    User.find({email:req.body.email})
    .exec()
    .then(user=>{
        if(user.length>=1){
            return res.status(409).json({message:"Email exists"})
        }
        else{
            bcrypt.hash(req.body.password,10,(err,hash)=>{

                if(err){
        
                    return res.status(500).json({
                        error:err
                    })
                }
                else{
                    const user = new User({
        
                        _id:new mongoose.Types.ObjectId(),
                        email:req.body.email,
                        name:req.body.name,
                        password:hash
                    });
                    user
                    .save()
                    .then(result=>{
                        res.status(201).json({
                            message:"User Created"
                        })
                       
                    })
                    .catch(
                        err=>{
                            console.log(err);
                            res.status(500).json({
                                error:err
                            })
                        }
        
                    )
                }
        
            })
        }
    })


 
  

}

exports.login=(req,res,next)=>{
    User.find({email:req.body.email})
    .exec()
    .then(
        user=>{
            if(user.length<1){
                return res.status(401)
                .json({
                    message:"invalid user"
                })
            }
            else{
                bcrypt.compare(req.body.password,user[0].password,(err,ans)=>{

                    if(err){
        
                        return res.status(500).json({
                            error:err
                        })
                    }
                   

                    if(ans){
                      const token=  jwt.sign({

                            email:user[0].email,
                            userId:user[0]._id

                        },process.env.jwt_key,{expiresIn:"1h"});

                        return res.status(200).json({
                            message:"loged in",
                            token:token
                        })
                    }
                })
            }
        }
    )
    .catch(
        err=>{
            console.log(err);
            res.status(500).json({
                error:err
            })
        }

    )
    
}

exports.update=(req,res,next)=>{
    var id=req.params.id;
    const updateOps={};
    const body=req.body
 
    // for(const ops of req.body){
    //     updateOps[ops.propName]=ops.value
    // }
    console.log(body);
    for( var i of body){
        console.log(i);
    }
    
 
//     User.update({_id:id}, {$set:updateOps})
//     .exec()
//     .then( resp=>{
//        res.status(200).json(result) ;
//     }
//      )
//     .catch(
//      err=>{
//          console.log(err);
//          res.status(500).json({
//              error:err
//          })
//      }
 
//  )
 
 }

exports.deleteById=(req,res,next)=>{

    var id=req.params.id;

    User.remove({
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
            console.log(err);
            res.status(500).json({
                error:err
            })
        }

    )
}