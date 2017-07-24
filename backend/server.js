const express = require('express');

const app = express();

// Example route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Backend server for Electron App running on port 3000!');
});
