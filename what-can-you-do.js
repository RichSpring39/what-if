const prompt = require(`prompt-sync`)({sigint: true});

let enterAge = Number(prompt("Please enter in your age: "));
console.log(enterAge);

if(enterAge < 16){
    console.log("you can't drive.");
}else if (enterAge <= 17){
    console.log("you can drive but not vote. ");
}else if (enterAge <= 24){
    console.log("you can vote but not rent a car. ");
}else {
    console.log("you can do anything. ")
}