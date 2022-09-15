const prompt = require(`prompt-sync`)({sigint: true});

let date = Number(prompt("Please enter in the date: "));
console.log(date);

if(date === 1){
    console.log("Monday");
}else if(date === 2){
    console.log("Tuesday");
}else if(date === 3){
    console.log("Wednesday");
}else if(date === 4){
    console.log("Thursday");
}else if(date === 5){
    console.log("Friday");
}else if(date === 6){
    console.log("Saturday");
}else if(date === 7){
    console.log("Sunday");
}else {
    console.log("error");
}
