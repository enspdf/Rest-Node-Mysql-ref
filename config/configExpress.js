var express = require("express");
var bodyParser = require("body-parser");
var md5 = require("MD5");
var app = express();
var server = require("./configServer");
var routes = require("../routes/routes");

var configExpress = function (connection) {
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    var router = express.Router();
    app.use('/api', router);
    var rest = routes.routesHandler(router, connection, md5());
    server.startServer();
};

module.exports.configExpress = configExpress;