//possible to call this way because of hoisting 
//console.log(random(0, 10));

//look at passbyvalue
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) - min);
}

//anonymous function - which doesn't have a name
//below i assign a function to a variable, therefore it ends with a ;

const randomAnonymousFunction = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) - min);
};

//console.log(randomAnonymousFunction(0, 10));

const randomArrowFunction = (min, max) => {
    //this is a function body
    return Math.floor(Math.random() * (max - min + 1) - min);
};

//console.log(randomArrowFunction);

//not usable if you have many statements

//this is a arrow or a lambda function

const randomArrowFunctionCompact = (min, max) => Math.floor(Math.random() * (max - min + 1) - min);

//console.log(randomArrowFunctionCompact(0, 20));

//using function as arguments within a function 
//this is a callbackfunction which means is a function that has another has an argument passed or referenced
function genericActionPerformer(genericAction, genericName) {
    return genericAction(genericName);
}

const subtract = (name) => `${name} is subtracting`;

//console.log(genericActionPerformer(subtract, "Tobias"));

//console.log(genericActionPerformer(walk, "Nicolas"));

console.log(genericActionPerformer((name) => `${name} is walking`, "Andrea"));