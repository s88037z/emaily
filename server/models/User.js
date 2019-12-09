const mongoose = require("mongoose");
const { Schema } = mongoose; // equals "const Schema = mongoose.Schema"

const userSchema = Schema({
    googleId:String


});

mongoose.model("users",userSchema) // load a schema  into mongoose