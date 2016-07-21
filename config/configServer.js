var express = require("express");
var app = express();

var startServer = function() {
    app.listen(3000, function() {
        console.log("Server is running in http://localhost:3000");
    });
};

var stopServer = function(err) {
    console.log("App is was crashed because: " + err);
    process.exit(1);
};

module.exports.startServer = startServer;
module.exports.stopServer = stopServer;