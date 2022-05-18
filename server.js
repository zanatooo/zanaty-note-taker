const express = require('express');
const path = require('path');
// Helper method for generating unique ids
const uuid = require('./helpers/uuid');

const PORT = 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use(require("//routes/apiroutes"))
app.use(require("//routes/homeroutes"))
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);