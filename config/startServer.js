var express = require("express");
var app = express();

var startServer = function() {
    app.listen(3000, function() {
        console.log("Running in port 3000");
    });
};

module.exports.startServer = startServer;