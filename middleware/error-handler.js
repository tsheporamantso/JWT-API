const { StatusCodes } = require('http-status-codes');
const { CustomeAPIError } = require('../errors');

const errorHandleMiddleware = async (err, req, res, next) => {
  if (err instanceof CustomeAPIError) {
    next();
    return res.status(err.StatusCodes).json({ msg: err.message });
  }
  return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .send('Something went wrong try again');
};

module.exports = errorHandleMiddleware;
