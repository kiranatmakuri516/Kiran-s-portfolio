const express = require('express');
const bp = require('body-parser');
const ejs = require("ejs");
const app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render("home");
})

app.get("/mainpage", (req, res) => {
    res.render("mainpage");
})

app.get("/about", (req, res) => {
    res.render("about");
})

app.get("/skills", (req, res) => {
    res.render("skills");
})

app.get("/certificates", (req, res) => {
    res.render("certificate");
})

app.get("/projects", (req, res) => {
    res.render("projects");
})

app.get("/contact", (req, res) => {
    res.render("contact");
})


app.listen(3000, function () {
    console.log("Server started at 3000");
})