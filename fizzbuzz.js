const prompt = require(`prompt-sync`)({sigint: true});

let num = Number(prompt("enter a number: "));

console.log(num);

//divisable by 3 = write fizz
//divisable by 5 = write buzz
//divisable by both = write fizz buzz

if(num % 15 === 0){//divisable by 3 and 5
    console.log("fizzbuzz");
}else if(num % 3 === 0){
    console.log("fizz");
}else if(num % 5 === 0){
    console.log("buzz");
}

