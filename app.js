var express = require("express");
var mysql = require("mysql");
var md5 = require("MD5");
var bodyParser = require("body-parser");
var rest = require("./routes/routes");
var db = require("./config/database.json");
var app = express();

function Rest() {
    var self = this;
    self.connectMysql();
}

Rest.prototype.connectMysql = function() {
    var self = this;
    var pool = mysql.createPool({
        connectionLimit: 100,
        host: db.database.host,
        user: db.database.username,
        password: db.database.password,
        database: db.database.dbname,
        debug: false
    });
    pool.getConnection(function(err, connection){
        if (err) {
            self.stop(err);
        } else {
            self.startExpress(connection);
        }
    })
};

Rest.prototype.startExpress = function(connection) {
    var self = this;
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    var router = express.Router();
    app.use('/api', router);
    var rest_router = new rest(router, connection, md5);
    self.startServer();
};

Rest.prototype.startServer = function() {
    app.listen(3000, function() {
        console.log("Server is running in http://localhost:3000");
    });
};

Rest.prototype.stop = function(err) {
    console.log("Issue with MySQL n" +  err);
    process.exit(1);
};

new Rest();