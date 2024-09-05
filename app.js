const express = require('express');
require('dotenv').config();

const app = express();

const { PORT } = process.env || 3000;
const start = () => {
  try {
    app.listen(PORT, console.log(`Listening on http://localhost:${PORT}`));
  } catch (error) {
    console.log(error);
  }
};
start();
