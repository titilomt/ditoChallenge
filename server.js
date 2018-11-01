const express     = require("express");
const mysql       = require("mysql");
const bodyParser  = require("body-parser");

const app = express();

const port = 9090;

const con = mysql.createConnection({
    host: "",
    user: "",
    password: ""
});

app.use(bodyParser.urlencoded({ extended: true }));

require('./app/routes')(app, {});
app.listen(port, _ => console.log(`Alive @ ${port}`));
