const express = require('express');
<<<<<<< HEAD

const app = express();

// Example route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
=======
const app = express();

// Example route
app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
>>>>>>> 2e083b3bfbd1ce9d55ccd620c38f434258788e13
  console.log('Backend server for Electron App running on port 3000!');
});
