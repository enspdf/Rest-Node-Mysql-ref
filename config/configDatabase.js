var mysql = require("mysql");
var server = require("./configServer");
var configExpress = require("./configExpress");

var connectMysql = function() {
    var pool = mysql.createPool({
        connectionLimit: 100,
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'rest_post',
        debug: false
    });
    pool.getConnection(function(err, connection){
        if (err) {
            server.stopServer(err);
        } else {
            configExpress.configExpress(connection);
        }
    })
};

module.exports.connectMysql = connectMysql;