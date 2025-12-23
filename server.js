console.log("Web Server boshlash");
const express = require("express");
const app = express();
const http = require("http")
//1 BEGIN
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//2 SESSION
//3 VIEWS CODE
app.set("views", "views");
app.set("view engine", "ejs");
//4 ROUTING
app.get("/", function (req, res) {
    res.end("<h1 style=\"background: red; color: white;\">Server by NOAH</h1>");
});
app.get("/gift", function (req, res) {
    res.end("<h1 style=\"background: red; color: white;\">1-page by NOAH</h1>");
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
    console.log(`The server is running successfully on port: ${PORT}`);
});