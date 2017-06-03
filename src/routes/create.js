var Book = require('../models/Book');
var Joi = require('joi');

module.exports = {
  method: 'POST',
  path: '/api/books',
  config: {
    validate: {
      payload: {
        name: Joi.string().required(),
        author: Joi.string().required()
      }
    },
    cors: true
  },
  handler: function(request, reply) {
    var book = new Book(request.payload);
    book.save(function(error, book) {
      if (error) {
        reply({
          statusCode: 503,
          message: error
        });
      } else {
        reply({
          statusCode: 201,
          message: 'Added a new Book successfully'
        });
      }
    });
  }
};
