const express     = require("express");
const bodyParser  = require("body-parser");

const app = express();

const port = 9090;

app.use(bodyParser.urlencoded({ extended: true }));

require('./app/routes')(app, {});
app.listen(port, _ => console.log(`Alive @ ${port}`));
