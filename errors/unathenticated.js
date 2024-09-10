const { StatusCodes } = require('http-status-codes');
const CustomeAPIError = require('./custom-error');

class Unathenticated extends CustomeAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

module.exports = Unathenticated;
