var Book = require('../models/Book');
var Joi = require('joi');

module.exports = {
  method: 'PUT',
  path: '/api/books/{id}',
  config: {
    validate: {
      params: {
        id: Joi.string().required()
      },
      payload: {
        name: Joi.string(),
        author: Joi.string()
      }
    },
    cors: true
  },
  handler: function(request, reply) {
    Book.update({ _id: request.params.id }, request.payload, function(error, book) {
      if (error) {
        reply({
          statusCode: 503,
          message: 'Failed to get data',
          data: error
        });
      } else {
        reply({
          statusCode: 200,
          message: 'Book updated successfully',
          data: book
        });
      }
    });
  }
};
