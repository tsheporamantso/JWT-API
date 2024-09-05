const { StatusCode } = require('http-status-codes');
const CustomeAPIError = require('./custom-error');

class Unathenticated extends CustomeAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCode.UNAUTHORIZED;
  }
}

module.exports = Unathenticated;
