//route configuration
//instead we can use nodemon that automatically refreshes the code during development 
//run command nodemon app.js

const express = require("express");
//console.log(express);

//shorter version from the one above
//const app = require("express");
const app = express();
app.use(express.json())

//http dev port
app.listen(8080);

//pass in a callback function that gets a request and a response
//json as response

//route (entire thing)
//HTTP method
//endpoint / call back function

app.get("/", (req, res) => { 
    res.send({ message: "Our first route"})
});

let bicycleSpins = 0;

app.get("/spinthebicycle", (req, res) => {
    bicycleSpins += 1;
    res.send({message: `People have spun the bicycle wheel ${bicycleSpins}`})
});

let dinosour = "ow ow ow"; 

app.get("/killthedino", (req, res) => {
    bicycleSpins += 1;
    res.send({message: `I have been kicked! ${dinosour} says ow ow ow`})
});

//why to send json? why json?
//it is an specific way to define data that other languages can interpert 
//Before f.ex you would serialize pojo and sent it instead

//xml that gets passed as valid html 
app.get("/about", (req, res) => {
    res.send(`
        <h1>About mememe</h1>
        <p>This is my page</p>`
    );
});

//What is called the way to send data below? Query String. 
//bat?adjective=spooky
//always a json*
app.get("/bat", (req, res) => {
    console.log(req.query);
    res.send({message: `The bat is ${req.query.adjective}.`});
});

// bottle/large
//unlike {} spring, we use : 

app.get("/bottle/:bottleSize", (req, res) => {
    res.send({bottleSize: req.params.bottleSize})
});

app.post("/bag", (req, res) => {
    console.log(req.body)
    res.send({message: req.body})
});

console.log(new Date());
console.log(Date());
console.log(Date.now());

app.get("/time", (req, res) => {
    res.send({Date: new Date()})
})

app.get("/time/time", (req, res) => {
    res.send({
        timeUTC: new Date(),
        timeLocal: Date(),
        unixTimestamp: Date.now()
    });
});

console.log(new Date().toLocaleDateString("da-dk"), {weekday: new Date().getDay()});

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//I created outside, so i dont have to create it every time
const months = ["Jan", "Feb", "Mar", "April", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

app.get("/time/day", (req, res) => {
    res.send({data: days [new Date().getDay()]});
})


app.get("/time/month", (req, res) => {
    res.send({data: months [new Date().getMonth()]});
})
