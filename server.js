var express = require('express');
var logger = require('morgan');
var serveStatic = require('serve-static')

var app = express();

app.use(express.static(__dirname + '/'));
app.use(logger);
app.listen(process.env.PORT || 8080);