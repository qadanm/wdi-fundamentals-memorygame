console.log("up and running");


var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

function checkForMatch(){
    if(cardsInPlay.length === 2){
    if(cardsInPlay[0]===cardsInPlay[1]){
        alert("You've got a match");
    }else{
        alert("Not a match");
        }
    }
}

var flipCard = function(cardID){
    cardsInPlay.push(cards[cardID]);
    checkForMatch()
    console.log("User Flipped " + cardID);
}

flipCard(0);
flipCard(2);