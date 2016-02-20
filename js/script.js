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
    var cardIndex = playerHand.push(myDeck[nextCard()].value);
    placeNextPlayerCard(cardIndex)
    calculatePlayerHand()
    alert("Player Drew " + playerHand[playerHand.length - 1])
});

$('.playerStand').click(function () {
    flipDealerCards()
    $(".playerHit").addClass( "is-disabled" );
    alert("Dealer reviews his had: " + dealerHandTotal.toString())
});

//Set starting hand total
var playerHand = [myDeck[1].value, myDeck[3].value];
var dealerHand = [myDeck[0].value, myDeck[2].value];
var playerHandTotal = calculatePlayerHand();
var dealerHandTotal = calculateDealerHand();

//Caulate the player hand total
function calculatePlayerHand() {
    
    playerHandTotal = 0;
    for (var i in playerHand) {
        playerHandTotal += playerHand[i];
    }
    $(".handTotal").html(playerHandTotal);
    checkWinningConditions()
    return playerHandTotal;
};

//Caulate the dealer hand total
function calculateDealerHand() {
    dealerHandTotal = 0;
    for (var i in dealerHand) {
        dealerHandTotal += dealerHand[i];
    }
    return dealerHandTotal
};

//check winning conditions
function checkWinningConditions() {
    if (playerHandTotal == 21 && dealerHandTotal != 21) {
        alert("GameOver You WIN!!!!!!!!!!!!")
        location.reload();
    }
    if (playerHandTotal == 21 && dealerHandTotal == 21) {
        alert("Its a draw")
        location.reload();
    }
    if (playerHandTotal > 21) {
        alert("GameOver You LOSE!")
        location.reload();
    }
}


