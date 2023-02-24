const express = require("express");
const app = express();

app.use(express.json());

app.listen(8080); 

//array of birds 
const birds = [
    { id: 1, name: 'Amazon Kingfisher', color: 'Green and bronze' },
    { id: 2, name: 'Macaw', color: 'Blue' },
    { id: 3, name: 'Jacobin', color: 'White' },
  ];

//get all birds
app.get("/birds", (req, res) => {
    res.send({ Birds: birds });
});

//get bird by id 
app.get("/birds/:id", (req, res) => {
    const bird = birds.find((b) => b.id === Number(req.params.id));
    res.send({ Bird: bird });
});

//post - create a new bird
//used ... spread operator to merge the new ID with the actual request body
//spread the data of req.body object into a new object.
app.post("/birds", (req, res) => {
    const newBird = { id: birds.length + 1, ...req.body };
    birds.push(newBird);
    res.send({ bird: newBird });
});

//put - update by id
app.put("/birds/:id", (req, res) => {
    const id = Number(req.params.id);
    const birdIndex = birds.findIndex((b) => b.id === id);
    const updatedBird = { id, ...req.body };
    birds[birdIndex] = updatedBird;
    res.send({ bird: updatedBird });
});

//patch

//delete by id
app.delete("/birds/:id", (req, res) => {
    const id = Number(req.params.id);
    const birdIndex = birds.findIndex(b => b.id === id);
    birds.splice(birdIndex, 1);
    res.send({ message: `Bird with id ${id} has been deleted` });
});

