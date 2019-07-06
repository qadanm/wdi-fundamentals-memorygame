console.log("up and running");


var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

var cardOne = cards[0];
var cardTwo = cards[1];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

if(cardsInPlay.length === 2){
    if(cardsInPlay[0]===cardsInPlay[1]){
        alert("You've got a match");
    }else{
        alert("Not a match");
    }
}

console.log("user flipped" + " " + cardsInPlay);