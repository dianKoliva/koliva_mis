const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://pretty:king@cluster0.zwozt.mongodb.net/koliva?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function() {
    console.log("Connected successfully");
});