//route configuration
//instead we can use nodemon that automatically refreshes the code during development 
//run command nodemon app.js

//const express = require("express");
//console.log(express);

//shorter version from the one above
const app = require("express")();

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

console.log("blabla")