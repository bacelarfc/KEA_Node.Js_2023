const express = require("express");
const app = express();

app.use(express.json());

app.listen(8080); 

//an array of birds 

const birds = [
    { id: 1, name: 'Amazon Kingfisher', color: 'Green and bronze' },
    { id: 2, name: 'Macaw', color: 'Blue' },
    { id: 3, name: 'Jacobin', color: 'White' },
  ];

//get all
app.get("/birds", (req, res) => {
    res.send({ Birds: birds });
});

//get by id 
app.get("/birds/:id", (req, res) => {
    const bird = birds.find((b) => b.id === Number(req.params.id));
    res.send({ Bird: bird });
});
