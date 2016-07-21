var express = require("express");
var bodyParser = require("body-parser");
var md5 = require("MD5");
var app = express();
var startServer = require("./startServer");
var routes = require("../routes/routes");

var configExpress = function (connection) {
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    var router = express.Router();
    app.use('/api', router);
    var rest = routes.routesHandler(router, connection, md5());
    startServer.startServer();
};

module.exports.configExpress = configExpress;