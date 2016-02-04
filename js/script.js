// imports my Deck object from deck.js - I separated these to stay DRY
var imported = document.createElement('script');
imported.src = 'js/ui-helper.js';
document.head.appendChild(imported);

var imported = document.createElement('script');
imported.src = 'js/deck.js';
document.head.appendChild(imported);

// Setup Main deck objects
var gameOver = false;
var myDeck = new Deck();
myDeck = shuffleMy(myDeck);
console.log(myDeck);



$('.playerHit').click(function () {

    playerHand.push(myDeck[nextCard()].value);
    calculatePlayerHand()
    placeNextPlayerCard()
});


var playerHand = [myDeck[1].value, myDeck[3].value];
var playerHandTotal = 0;

function calculatePlayerHand() {
    playerHandTotal = 0;
    for (var i in playerHand)
    {
        playerHandTotal += playerHand[i];
    }

    $(".handTotal").html(playerHandTotal);
};
calculatePlayerHand();
