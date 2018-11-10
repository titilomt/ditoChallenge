const express     = require("express");
const bodyParser  = require("body-parser");
const mysql       = require("mysql");

const app = express();

const port = 9090;
app.require('./app/src')(app, {});

app.listen(port, _ => console.log(`Alive @ ${port}`));

// const con = mysql.createConnection({
//     host: "",
//     user: "",
//     password: ""
// });

// con.connect(err => {
//     if (err) throw err;
//     console.log("Connected.");

//     app.use(bodyParser.json());
//     app.use(bodyParser.urlencoded({ extended: true }));

    
// });