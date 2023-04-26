'use strict';

const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/status', (req, res) => {
  res.status(200).send('OKAY!')
});

app.get('*', (req, res) => {
  res.status(200).send('Gottem.');
});

module.exports = {
  app,
  start: (PORT) => {
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });
  }
}