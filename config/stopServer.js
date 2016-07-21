var stopServer = function(err) {
    console.log("Issue connection to database \n" + err.message);
    process.exit(1);
};

module.exports.stopServer = stopServer;