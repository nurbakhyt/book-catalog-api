var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var bookSchema = new Schema({
  name: String,
  author: String
});

module.exports = Mongoose.model('Book', bookSchema, 'Book');
