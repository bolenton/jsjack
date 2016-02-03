// imports my Deck object from deck.js - I separated these to stay DRY
var imported = document.createElement('script');
imported.src = 'js/deck.js';
document.head.appendChild(imported);

// Setup Main game objects
var Dealer = {};
var Player = {};
var myDeck = new Deck();
myDeck = shuffle(myDeck);
console.log(myDeck);



// Ui Setup Controls and Game initializer
(function () {
    $(document).ready(function () {
        $('.game').hide();
    })

    //Start Game
    $('.startGame').click(function () {
        var playerName = $(".playerName").val();
        var bet = $(".playerBet").val();
        var playerBet = parseInt(bet);


        loadPlayerUi(playerName, playerBet, "ava/M04.png");

        if (playerName.length > 0 && bet.length > 0 && !isNaN(playerBet)) {
            $('.setUpUi').hide();
            $('.game').show();
            // createHand();
            dealCards()
        }
        else {
            alert("Please enter your name amount to bet.")
        }
    });
})();

// Game play Logic

$('.playerHit').click(function () {
    for (i = 4; i <= 51; i++)
        alert("Dealer drew card " + myDeck[i].name + " of " + myDeck[i].suit + " " + i);


})

function loadPlayerUi(name, bet, avatar) {
    $(".name").append(name);
    $(".bet").append(bet);
    $(".avatar").append(avatar);
}

function calculateHand() {
    var handTotal = [];
    var total = 0;
    for (var i in handTotal) { total += handTotal[i]; }
}
calculateHand();