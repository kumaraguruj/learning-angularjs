var express = require('express');
var app = express();

// Serves up all files in the current directory
// NOT SAFE FOR PRODUCTION USE, USE ONLY FOR LOCAL DEVELOPMENT AND TESTING
app.use(express.static(__dirname))

app.listen(3000);
