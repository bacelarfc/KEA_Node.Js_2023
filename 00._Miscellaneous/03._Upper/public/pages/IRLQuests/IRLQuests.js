//https://www.boredapi.com/api/

fetch("https://www.boredapi.com/api/activity")
.then((Response) => Response.json())
.then((result) => {
    console.log(result)
    const questReader = document.getElementById("quest");
    questReader.innerText = result.activity;
    })