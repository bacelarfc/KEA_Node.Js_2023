//strict-mode catches errors

"use strict"

totalGlobalVariable = "Never ever do this!"

var totalGlobalVariable = "Never do this!"

{
    var someValue = true;
    {

        var someValue = false;
    }
    console.log(someValue)
}

//var propagates outside of its scope, therefore it will false, since it has been defined within the scope. 

//creates a new scope a new function 
{
    let someValue = true; 
    {
        let someValue = false;
    }
    console.log(someValue)
}

//call excecution stack

//waits one second, and points to the global (var) i 
for (var i = 0; i <= 5; i++) {
    setTimeout(()=> {
    }, 1000);
}

//now using let 

for (let i = 0; i <= 5; i++) {
    setTimeout(()=> {
    }, 1000);
}

