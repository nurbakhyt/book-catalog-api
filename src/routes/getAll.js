var Book = require('../models/Book');
var Joi = require('joi');

module.exports = {
  method: 'GET',
  path: '/api/books',
  config: {
    handler: function(request, reply) {
      Book.find(function(error, books) {
        if (error) {
          reply({
            statusCode: 503,
            message: 'Failed to get data',
            data: error
          });
        } else {
          reply({
            statusCode: 200,
            message: 'Books successfully fetched',
            data: books
          });
        }
      });
    },
    cors: true
  }
};
