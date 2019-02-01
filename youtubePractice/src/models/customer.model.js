var mongoose = require('mongoose');

var server = 'cloud.mongodb.com/v2#/org';
var database = '5c549ca8d5ec13f0686e0b74';
var user = 'junsu';
var password = 'junsu1234';

//mongoose.connect(`mongodb://${user}:${password}@${server}/${database}`);
mongoose.connect('mongodb://localhost/test');

var CustomerSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        require: true,
        unique: true
    }
});

module.exports = mongoose.model('Customer', CustomerSchema);