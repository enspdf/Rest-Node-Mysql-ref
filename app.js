var db = require("./config/configDatabase");

function REST() {
    db.connectMysql();
};

new REST();