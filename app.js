const express = require("express");
const app = express();
const res = require("express/lib/response")
const fs = require("fs");

const db = require("./server").db();

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

app.post("/create-item", (req, res) => {
    const new_reja = req.body.reja
    db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
        if (err) {
            console.log(err);
            res.end('something went wrong!');
            
        } else {
            res.end("successfully added")
        }
    });
});

app.get("/", (req, res) => { 
    db.collection("plans")
        .find()
        .toArray((err, data) => {
            if (err) {
                console.log(err);
                res.end("something went wrong")
            } else {
                res.render("reja", { items: data });
            }
        }); 
});

app.get("/author", (req, res) => { 
    res.render("author", { user: user });
});

module.exports = app;