var mongoose = require('mongoose');

var LegoSchema = mongoose.Schema(
   {
      name : String,
      price : Number,
      date : Date,
      image: String,
      brand: String
   }
);

var LegoModel = mongoose.model("lego", LegoSchema, "lego");

module.exports = LegoModel;