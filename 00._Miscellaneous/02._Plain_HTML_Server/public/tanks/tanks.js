const apiUrl = "http://localhost:8080/api/tanks";
let tanksDivWrapper = document.getElementById('tanks-wrapper')

//READ UPON INNER HTML AND XSS
 fetch("/api/tanks")
     //gives me a bitestream
        .then((Response) => Response.json())
        .then((result) => {
            result.data.forEach(tank => {

            const tankDiv = document.createElement("div");

            const tankName = document.createElement("p");
            tankName.innerText = tank.name;
            tankDiv.appendChild(tankName)

            const tankNationality = document.createElement("p");
            tankNationality.innerText = tank.nationality || "No nationality";
            tankDiv.appendChild(tankNationality);
          
            tanksDivWrapper.appendChild(tankName);
            tanksDivWrapper.append(tankNationality)
           
            });       
        });