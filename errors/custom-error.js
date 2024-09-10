/* eslint-disable no-useless-constructor */
class CustomeAPIError extends Error {
  constructor(message) {
    super(message);
  }
}
module.exports = CustomeAPIError;
