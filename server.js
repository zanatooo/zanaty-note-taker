const express = require('express');
const path = require('path');
// Helper method for generating unique ids
//const uuid = require('./helpers/uuid');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use(require("./routes/apiroutes"))
app.use(require("./routes/htmlroutes"))


app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});