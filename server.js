const express = require("express");
const app = express();
const http = require("http");
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf-8", (err, data) => {
    if (err) {
        console.log("Fayl o'qishda xatolik yuz berdi:", err);
    } else {
        user = JSON.parse(data);
        console.log("Fayl muvaffaqiyatli o'qildi.");
    }
});
//1 BEGIN
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//2 SESSION
//3 VIEWS CODE
app.set("views", "views");
app.set("view engine", "ejs");

//4 ROUTING
app.get("/", (req, res) => { 
    res.redirect("/author");
});

app.get("/author", (req, res) => { 
    res.render("author", { user: user });
});
app.post("/create_item", (req, res) => {
    //console.log(req.body);
    //res.json({message: "success"});
    //res.send("Ma'lumot qo'shildi");
    //res.redirect("/");
});

app.get("/about", (req, res) => {
    res.end("About page");
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
    console.log(`The server is running successfully on port: ${PORT}`);
});