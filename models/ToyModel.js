var mongoose = require('mongoose');

var ToySchema = mongoose.Schema(
    {
        name: String,
        price: Number,
        description: String,
        image: String
    }
);

var ToyModel = mongoose.model('toy', ToySchema, 'toy');

module.exports = ToyModel;
