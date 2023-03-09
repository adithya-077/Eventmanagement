const mongoose = require("mongoose");

const eventSchema = mongoose.Schema({
  name: {
    require: true,
    type: String,
    trim: true,
  },
  time: {
    require: true,
    type: String,
    trim: true,
  },
  date: {
    require: true,
    type: Date,
    trim: true,
  },
  venue: {
    require: true,
    type: String,
    trim: true,
  },
  discription: {
    require: true,
    type: String,
    trim: true,
  },
  weburl: {
    require: true,
    type: String,
    trim: true,
  },
  capacity: {
    require: true,
    type: Number,
    trim: true,
  },
  age: {
    require: true,
    type: Number,
    trim: true,
  },
  hostid: {
    require: true,
    type: String,
    trim: true,
  },
  tags:{
    require: true,
    type: String,
    trim: true,
  },
  duration:{
    require: true,
    type: String,
    trim: true,
  },
  day:{
    require: true,
    type: String,
    trim: true,  
  },
  price:{
    require: true,
    type: Number,
    trim: true,
  },  
  address:{
    require: true,
    type: String,
    trim: true,
  },
});

const Event = mongoose.model("event", eventSchema);
module.exports = Event;
