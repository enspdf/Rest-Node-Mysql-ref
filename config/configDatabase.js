var mysql = require("mysql");
var stopServer = require("./stopServer");
var configExpress = require("./configExpress");

var connectMysql = function() {
    var pool = mysql.createPool({
        connectionLimit: 100,
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'rest_post',
        debug: false
    });
    pool.getConnection(function(err, connection){
        if (err) {
            stopServer.stopServer(err);
        } else {
            configExpress.configExpress(connection);
        }
    })
};

module.exports.connectMysql = connectMysql;