const express = require("express");
const exphbs = require("express-handlebars");
const multer = require("multer");

const app = express();
app.engine("hbs", exphbs({ defaultLayout: "main.hbs" }));
app.set("view engine", "hbs");
app.use(express.static("views"));

app.get('/', function (req, res) {
    res.render("mylayout");
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})

