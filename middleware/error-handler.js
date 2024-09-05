const { StatusCode } = require('http-status-codes');
const { CustomeAPIError } = require('../errors');

const errorHandleMiddleware = async (err, req, res, next) => {
  if (err instanceof CustomeAPIError) {
    next();
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res
    .status(StatusCode.INTERNAL_SERVER_ERROR)
    .send('Something went wrong try again');
};

module.exports = errorHandleMiddleware;
