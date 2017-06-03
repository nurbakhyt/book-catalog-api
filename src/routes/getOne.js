var Book = require('../models/Book');
var Joi = require('joi');

module.exports = {
  method: 'GET',
  path: '/api/books/{id}',
  config: {
    validate: {
      params: {
        id: Joi.string().required()
      }
    },
    cors: true
  },
  handler: function(request, reply) {
    Book.find({ _id: request.params.id }, function(error, book) {
      if (error) {
        reply({
          statusCode: 503,
          message: 'Failed to get data',
          data: error
        })
      } else {
        if (book.length === 0) {
          reply({
            statusCode: 200,
            message: 'Book not found',
            data: book
          })
        } else {
          reply({
            statusCode: 200,
            message: 'Book successfully fetched',
            data: book
          })
        }
      }
    });
  }
};
