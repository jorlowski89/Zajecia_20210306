const functions = require("./function")
const express = require("express");
const path = require("path");
const server = express();
const port = process.env.PORT || 3000;

server.set("view engine", "hbs")
server.use("/assets", express.static(path.join(__dirname, "./assets")))
server.use("/js", express.static(path.join(__dirname, "./js")))

server.get("/", function (req, res) {
    res.render("index", {
        pageTitle: "Lekcja Node",
        title: functions.task
    })
})

server.get("/about", function (req, res) {
    res.send("O nas")
})

server.get("/technology", function (req, res) {
    res.send("technologie")
})

server.listen(port, (err) => {
    if (err) {
        return console.log(`Aplikacja nie działa bo ${err}`);
    }
    console.log(`Aplikacja działa na porcie ${port}`);
});