const express     = require("express");
const bodyParser  = require("body-parser");
const mysql       = require("mysql");

const app = express();

const port = 9090;

const con = mysql.createConnection({
    host: "db4free.net",
    user: "felipemasseo",
    password: "mysql12345"
});

con.connect(err => {
    if (err) throw err;
    console.log("Connected.");

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    require('./app/routes')(app, {});
    app.listen(port, _ => console.log(`Alive @ ${port}`));
});
