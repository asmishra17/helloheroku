var express = require("express");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

// basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/api/cars", function (req, res) {
    var cars = [{
        make: "Acura", 
        model: "test"
    }]
    res.send(cars);
});