const express = require('express');
const mainRoute = require('./routes/main');
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
require('dotenv').config();
require('express-async-errors');

const app = express();

app.use(express.static('./public'));
app.use(express.json());

app.use('/api/v1', mainRoute);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const { PORT } = process.env || 3000;
const start = () => {
  try {
    app.listen(PORT, console.log(`Listening on http://localhost:${PORT}`));
  } catch (error) {
    console.log(error);
  }
};
start();
