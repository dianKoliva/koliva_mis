var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
    user_name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    status: { type: String, default: "active", required: true }
});

// Compile model from schema
var User = mongoose.model('User', User);