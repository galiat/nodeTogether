const express = require('express');

const app = express();

const port = process.env.PORT || '8080';
const host = process.env.HOST || '0.0.0.0';

var rules = require('./app');
app.use(rules);

app.listen(port, host);

console.log('server running %s:%d', host, port);

// module.exports = app;
