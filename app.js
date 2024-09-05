const express = require('express');
const mainRouter = require('./routes/main');
require('dotenv').config();

const app = express();

app.use(express.static('./public'));

app.use('/api/v1', mainRouter);

const { PORT } = process.env || 3000;
const start = () => {
  try {
    app.listen(PORT, console.log(`Listening on http://localhost:${PORT}`));
  } catch (error) {
    console.log(error);
  }
};
start();
