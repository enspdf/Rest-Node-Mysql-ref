//var mysql = require("mysql");

function Router(router, connection, md5) {
    var self = this;
    self.routesHandler(router, connection, md5);
}

Router.prototype.routesHandler = function(router, connection, md5) {

    router.get("/", function(req, res) {
        res.json({"Error": false, "status": 200});
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

    router.get("/posts/:category_id", function(req, res) {

    });

    router.post("/posts", function(req, res) {

    });

    router.put("/posts", function(req, res) {

    });

    router.delete("/posts/:post_id", function(req, res) {

    });

    router.get("/categories", function(req, res) {

    });

    router.post("/categories", function(req, res) {

    });

    router.put("/categories", function(req, res) {

    });

    router.delete("/categories/:category_id", function(req, res) {

    });

};

module.exports = Router;