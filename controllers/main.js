const jwt = require('jsonwebtoken');
const { StatusCodes } = require('http-status-codes');
const { BadRequestError } = require('../errors');

const login = async (req, res) => {
  const { username, password } = req.body;
  if (username || password) {
    const id = new Date().getDate();

    const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_TIMELINE,
    });
    res.status(StatusCodes.OK).json({ msg: 'user created', token });
  } else {
    throw new BadRequestError('Please provide username and password');
  }
};
const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100 + 1);
  res.status(StatusCodes.OK).json({
    msg: 'Hello Dumi',
    secret: `Here is your authorized Data, and your lucky number is ${luckyNumber}`,
  });
};

module.exports = {
  login,
  dashboard,
};
