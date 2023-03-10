const express = require("express");
const app = express();

app.use(express.static("public"));

//every file in node is treated as a module
const tanksUtil = require("./util/tanks.js")

//export is done with require 
const { getTanks, addTank } = require("./util/tanks.js")
//console.log(tanks.getTanks())

//console.log(getTanks())

const tanks = [
    {name: "Tiger", nationality: "German", year: 1943},
    {name: "M1 Abrams", version: "M1"}  
];

const guards = [
    {name: "Emmanuel"},
    {name: "Jhon"}  
];

let visitorsCount = 0;

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/frontpage/frontpage.html");
});

app.get("/tanks", (req, res) => {
    res.sendFile(__dirname + "/public/tanks/tanks.html");
});

app.get("/api/tanks", (req, res) => {
    res.send({ data: getTanks });
});

app.get("/visitors", (req, res) => {
    res.sendFile(__dirname + "/public/visitors/visitors.html");
});

app.get("/api/visitors", (req, res) => {
    res.send({data: visitorsCount})
});

app.put("/api/visitors", (req, res) => {
    res.send({data: ++visitorsCount})
});

//Serve a page called tank museum guards
app.get("/museum/guards", (req, res) => {
    res.sendFile(__dirname + "/public/museum/guards.html");
});

//server side redirection 
app.get("/api/guards", (req, res) => {
   if(req.query.passport === "theskyisblue") {
    //return rather than else
    return res.redirect("/api/tanks");
}
   res.send({message: "You are not allowed to see the tanks. Give us the secret in the query string with the key being passport"})
});


const PORT = 8080;
app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
        return;
    }
    console.log("Server is running on port", PORT);
});