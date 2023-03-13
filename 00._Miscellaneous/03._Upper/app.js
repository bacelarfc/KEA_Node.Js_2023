import express from "express";
const app = express();

app.use(express.static("public"));

//you must refer to the file extension in this case (.js)
import jokes from "./util/jokes.js"
console.log(await jokes.getJoke())

import path from "path";

app.get("/", (req, res) => {
    res.sendFile(path.resolve("public/pages/frontpage/frontpage.html"))
})

app.get("/jokes", (req, res) => {
    res.sendFile(path.resolve("public/pages/jokes/jokes.html"))
})


app.get("/IRLQuests", (req, res) => {
    res.sendFile(path.resolve("public/pages/IRLQuests/IRLQuests.html"))
});

const PORT = 8080;
app.listen(PORT, (error) => {
    if(error)
    {
        console.log(error);
    }
    console.log("Server is running on port", PORT)
});
