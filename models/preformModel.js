var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var datetime = new Date();


var Preform = new Schema({
    _id:mongoose.Schema.Types.ObjectId,
    plate_no: { type: String, required: true },
    type: { type: String, required: true },
    brand: { type: String, required: true },
    chassis_no: { type: String, required: true },

    chassis_quantity:{ type: Number, required: true },
    screw_quantity:{ type: Number, required: true },
    baguette_quantity:{ type: Number, required: true },
    disk_quantity:{ type: Number, required: true },
    paint_quantity:{ type: Number, required: true },
    ressort_quantity:{ type: Number, required: true },

    chassis_up:{ type:Number, required: true },
    screw_up:{ type: Number, required: true },
    baguette_up:{ type: Number, required: true },
    disk_up:{ type: Number, required: true },
    paint_up:{ type: Number, required: true },
    ressort_up:{ type: Number, required: true },
    total:{ type: Number, required: true },
    date:{type:Date,default:datetime},
    status: { 
        type: String,
        enum: ['aproved', 'pending'],
        default: 'pending'
     }
})

var Preform=mongoose.model('Preform',Preform);
module.exports=Preform;