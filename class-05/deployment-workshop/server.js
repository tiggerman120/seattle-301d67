'use strict';

// an npm dependency/package that we installed via "npm i express"
// the reference to this dependency lives in our package.json file
const express = require('express');

// pulls in the express object so we can use it's methods
const app = express();

// the port to accept traffic on
const PORT = process.env.PORT || 3000;

// use this, don't worry about what it does just yet
app.use(express.static('./public'));

// this is our homepage -> it will serve up a simple html file
app.get('/', (request, response) => {
  response.sendFile('./public/index.html');
});

// this is an "API" route - it is meant to serve up data -> json
app.get('/user-data', (request, response) => {
  response.json({ username: 'bnates', pw: '12345', location: 'seattle' })
});

// sets up my server to accept incoming traffic at a specific PORT
app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});