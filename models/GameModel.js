var mongoose = require('mongoose');

var GameSchema = mongoose.Schema(
   {
      title : String,
      description : String,
      trailer : String
   }
);

var GameModel = mongoose.model("game", GameSchema, "game");

module.exports = GameModel;