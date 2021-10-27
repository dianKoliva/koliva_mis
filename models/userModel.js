var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    email: { type: String,
         required: true,
          unique:true,
           match:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ },
    password: { type: String, required: true },
    status: { type: String, default: "active", required: true }
});

// Compile model from schema
var User = mongoose.model('User', User);
module.exports = User;