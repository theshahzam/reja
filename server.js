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
app.post("/create-item", function (req, res) {
    console.log(req.body);
    res.json({test: "Success" });
});

app.get("/", function (req, res) { 
    res.render("harid", { pageTitle: "Home" });
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
    console.log(`The server is running successfully on port: ${PORT}`);
});