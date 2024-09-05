const { StatusCode } = require('http-status-codes');
const CustomeAPIError = require('./custom-error');

class BadRequest extends CustomeAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCode.BAD_REQUEST;
  }
}

module.exports = BadRequest;
