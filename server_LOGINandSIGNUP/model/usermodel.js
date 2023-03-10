const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    Fname:{
        required:true,
        type: String,
        trim: true,
    },
    Lname:{
        required:true,
        type: String,
        trim: true, 
    },
    email:{
        required:true,
        type: String,
        trim: true,
        validate:{
            validator: (value)=>{
                const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                return value.match(re);
            },
            message : "plese enter a valid email address",
        }
    },
    mobileno:{
        required:true,
        type:String,
        trim:true,
    },
    password:{
        required:true,
        type: String,
    },
    liked:{
        type: [String],
        default: []
    }

}); 

const User = mongoose.model("User" , userSchema);
module.exports = User;