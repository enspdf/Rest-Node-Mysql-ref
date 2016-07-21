var mysql = require("mysql");

var routesHandler = function(router, connection, md5) {

    router.get("/", function(req, res) {
        res.redirect("/users");
    });
    router.post("/users", function(req, res) {

    });

    router.get("/users", function(req, res) {

    });

    router.get("/users/:user_id", function(req, res) {

    });

    router.put("/users", function(req, res) {

    });

    router.delete("/users/:user_id", function(req, res) {

    });

    router.delete("/users/:email", function(req, res) {

    });

    router.get("/posts", function(req, res) {

    });

    router.get("/posts/:post_id", function(req, res) {

    });

    router.post("/posts", function(req, res) {

    });

    router.put("/posts", function(req, res) {

    });

    router.delete("/posts/:post_id", function(req, res) {

    });

};

module.exports.routesHandler = routesHandler;