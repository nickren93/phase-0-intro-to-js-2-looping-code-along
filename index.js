// Code your solutions in this file
/*
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    //debugger;
}
*/

/*
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts){
    for(let i = 0; i < gifts.length; i++){
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        //debugger;
    }

    return gifts;
}

wrapGifts(gifts);
*/

const names = ["Charlie", "Samip", "Ali"];
const events = "birthday";

function writeCards(name, event){
    const message = [];
    for(let i = 0; i < name.length; i++){
        message.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
    }
    return message;
}

console.log(writeCards(names, events));


//define countDown:
function countDown(number){
    for (number; number >= 0; number--){
        console.log(number);
    }
}

//invokle counDown function:
countDown(10);