require('./config/config')

const path = require('path');
const express = require('express');

const app = express();
const port = process.env.PORT;
const publicPath = path.join(__dirname, '../public');

app.use(express.static(publicPath));

app.listen(port, () => {
  console.log(`Server has started up on port ${port}`);
});
