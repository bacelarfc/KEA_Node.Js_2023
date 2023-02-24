const express = require("express");
const app = express();

app.use(express.static("public"));

const tanks = [
    {name: "Tiger", nationality: "German", year: 1943},
    {name: "M1 Abrams", version: "M1"}  
];

let visitorsCount = 0;

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/frontpage/frontpage.html");
});

app.get("/tanks", (req, res) => {
    res.sendFile(__dirname + "/public/tanks/tanks.html");
});

app.get("/api/tanks", (req, res) => {
    res.send({ data: tanks });
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

const PORT = 8080;
app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
        return;
    }
    console.log("Server is running on port", PORT);
});