var Book = require('../models/Book');
var Joi = require('joi');

module.exports = {
  method: 'DELETE',
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
    Book.remove({ _id: request.params.id }, function(error) {
      if (error) {
        reply({
          statusCode: 503,
          message: 'Error in removing the Book',
          data: error
        });
      } else {
        reply({
          statusCode: 200,
          message: 'Book deleted successfully'
        });
      }
    });
  }
};
