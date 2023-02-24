
fetch("/api/visitors")
.then(response => response.json())
.then(result => {
    updateVisitorCount(result.data)
    });
  

function updateVisitorCount(visitorCount) {
    const visitorCountDiv = document.getElementById("visitors-count")
    visitorCountDiv.innerText = visitorCount;
}

//when button is clicked update visitors count with put
//and then call the updateVisitorCount

function writeInVisitorLog() {
    fetch("/api/visitors", {
        method: "PUT",
        headers: {
         "Content-Type": "application.json"   
        }
    })
    .then(response => response.json())
    .then(result => updateVisitorCount(result.data))
};