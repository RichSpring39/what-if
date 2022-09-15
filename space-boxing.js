const prompt = require(`prompt-sync`)({sigint: true});

let weight = Number(prompt("Please enter in your earth weight: "));
console.log(weight);

console.log("Please enter in planet number 1-Venus 2-Mars 3-jupiter 4-Saturn 5-Uranus 6-Neptune ")
let planetNum = Number(prompt(">"));

let valueveight = true;

if(isNaN(weight) === true){
    console.log("Invalid weight");
    validweight = false;
}

console.log(weight);
console.log(planetNum);

if(planetNum === 1){
    console.log("you picked Venus");
    console.log(`Your weight is: ${weight * 0.78}`)
}else if(planetNum === 2){
    console.log("you picked Mars");
    console.log(`Your weight is: ${weight * 0.39}`)
}else if(planetNum === 3){
    console.log("you picked Jupider");
    console.log(`Your weight is: ${weight * 2.65}`)
}else if(planetNum === 4){
    console.log("you picked Saturn");
    console.log(`Your weight is: ${weight * 1.17}`)
}else if(planetNum === 5){
    console.log("you picked Uranus");
    console.log(`Your weight is: ${weight * 1.05}`)
}else if(planetNum === 6){
    console.log("you picked Neptune");
    console.log(`Your weight is: ${weight * 1.23}`)
}