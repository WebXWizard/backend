
/* Mongoose Require */

const mongoose = require('mongoose');


/* Database Connection and Creation */

mongoose.connect("mongodb://127.0.0.1:27017/myDatabase") 

/* Schema Creation */

const usersSchema = mongoose.Schema({
    username: String,
    name: String,
    age: Number   
})

/* Model Creation */

module.exports = mongoose.model("user", usersSchema) 
