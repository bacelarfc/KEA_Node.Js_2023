// import jokes from "./jokes.json" assert { type: "json"}
// const jokes = require("./jokes.json");

import Sentiment from "sentiment";
const sentiment = new Sentiment();
// export default jokes;
//  const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit"
// fetch(url) 
// .then(response => response.json)
// .then(result => console.log(result))

async function getJoke() {
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit"
const response = await fetch(url);
const result = await response.json();
// const score = sentiment.analyze(result.joke)
// console.log(result)

const jokeToAnalyze = result.joke || `${result.setup} ${result.delivery}`
const { score } = sentiment.analyze(jokeToAnalyze)
// console.log(score)

if(score < 0) {
   return await getJoke()
} else {
    return result;
}
}

//console.log(sentiment.analyze("Node is shit"));

export default getJoke;


