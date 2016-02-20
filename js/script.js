// imports my Deck object from deck.js - I separated these to stay DRY
var imported = document.createElement('script');
imported.src = 'js/ui-helper.js';
document.head.appendChild(imported);

var imported = document.createElement('script');
imported.src = 'js/deck.js';
document.head.appendChild(imported);

// Setup Main deck objects
var myDeck = new Deck();
myDeck = shuffleMy(myDeck);
console.log(myDeck);

//Player Hit 
$('.playerHit').click(function () {
    var cardIndex = playerHand.push(myDeck[nextCard()].value);
    placeNextPlayerCard(cardIndex);
    calculatePlayerHand();
    $('.inGameMsg').text("Player drew " + playerHand[playerHand.length - 1]);
    checkWinningConditions();
});

//Player Stand 
$('.playerStand').click(function () {
    flipDealerCards()
    $(".playerHit").addClass("is-disabled");
    $('.dealerHandTotal').show();
    $('.inGameMsg').text("Dealer reviews that he had a: " + dealerHandTotal.toString());
    dealerHitorStand();
});


// Dealer Hit
function DealerHit() {
    var cardIndex = dealerHand.push(myDeck[nextCard()].value);
    placeNextDealerCard(cardIndex);
    calculateDealerHand();
    $('.inGameMsg').text("Dealer Drew " + dealerHand[dealerHand.length - 1]);
}

// Dealer Stand
function dealerStand() {
    checkWinningConditions();


    if (playerHandTotal > dealerHandTotal && playerHandTotal < 21) {
        $('.inGameMsg').text(playerName + " had a better hand. " + playerName + " won!");
        gameOver();
    }
    else if (dealerHandTotal > playerHandTotal && dealerHandTotal < 21) {
        $('.inGameMsg').text("Dealer Don had more, " + playerName + "lost.");
        gameOver();
    }
    else if (dealerHandTotal > 21) {
        $('.inGameMsg').text("Dealer Don BUST! " + playerName + " won.");
        gameOver();
    }
    else if (dealerHandTotal == playerHandTotal) {
        $('.inGameMsg').text("Its a tie");
        gameOver();
    }

}

//Dealer DEcides to hit or stand
function dealerHitorStand() {
    while (dealerHandTotal <= 16) {
        $('.inGameMsg').text("Dealer Jon decided to HIT!");
        DealerHit();
    }
    if (dealerHandTotal > 16) {
        $('.inGameMsg').text("Dealer Jon had to stand!");
        dealerStand();
    }
    if (dealerHandTotal == 21 && playerHandTotal != 21) {
        $('.inGameMsg').text("Gameover dealer Jon got a BlackJack")
        gameOver();
    }
};

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

        if (playerHand[i] == 1) {
            playerHand[i] = checkAce(playerHand[i], playerHandTotal)
        }
    }
    $(".handTotal").html(playerHandTotal);
    return playerHandTotal;
};

//Caulate the dealer hand total
function calculateDealerHand() {
    dealerHandTotal = 0;
    for (var i in dealerHand) {
        dealerHandTotal += dealerHand[i];
    }
    $(".dealerHandTotal").html(dealerHandTotal);
    return dealerHandTotal
};

//check winning conditions
function checkWinningConditions() {
    if (playerHandTotal == 21 && dealerHandTotal != 21) {
        $('.inGameMsg').text("Gameover " + playerName + ": got a BlackJack")
        gameOver();
    }
    if (playerHandTotal == 21 && dealerHandTotal == 21) {
        $('.inGameMsg').text("Its a draw")
        gameOver();
    }
    if (playerHandTotal > 21 && dealerHandTotal < 21) {
        $('.inGameMsg').text("Gameover " + playerName + " BUST!")
        gameOver();
    }
}

function gameOver() {
    $(".playerStand").addClass("is-disabled");
    $(".playerHit").addClass("is-disabled");
    $('.playAgain').show();
}

$('.playAgain').click(function () {
    location.reload();
});