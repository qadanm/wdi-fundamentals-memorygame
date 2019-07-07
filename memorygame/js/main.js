console.log("up and running");

var cards = [
    {
        rank: "queen",
        suit: "hearts",
        cardImg: "images/queen-of-hearts.png"
    },
    {
        rank: "queen",
        suit: "diamonds",
        cardImg: "images/queen-of-diamonds.png"
    },
    {
        rank: "king",
        suit: "hearts",
        cardImg: "images/king-of-hearts.png"
    },
    {
        rank: "king",
        suit: "diamonds",
        cardImg: "images/king-of-diamonds.png"
    }
]


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
    cardsInPlay.push(cards[cardID].rank);
    checkForMatch()
    console.log("User Flipped " + cards.rank);
    console.log(cards.cardImg);
    console.log(cards.suit);
}

flipCard(3);
flipCard(1);








