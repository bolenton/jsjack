$(document).ready(function () {
    $('.gameBoard').hide();
})

function loadCardUi(name, suit) {
    var s = suit[0].toLowerCase();
    var n = name[0].toLowerCase();
    return n + s;
}

function loadPlayerUi(name, bet, avatar) {
    $(".name").append(name);
    $(".bet").append(bet);
    $(".avatar").append(avatar);
}

// Ui Setup Controler to setup board

var playerNamee;
var bet;
var playerBet;

$('.startGame').click(function () {
    playerName = $(".playerName").val();
    bet = $(".playerBet").val();
    playerBet = parseInt(bet);

    loadPlayerUi(playerName, playerBet, "ava/M04.png");

    if (playerName.length > 0 && bet.length > 0 && !isNaN(playerBet)) {
        $('.welcomePlayer').hide();
        $('.gameBoard').show();
        // createHand UI();
    }
    else {
        alert("Please enter your name amount to bet.")
    }
});

function placeNextPlayerCard() {
    var nextCardIndex = nextCard();
    var card = (loadCardUi(myDeck[nextCardIndex].suit, myDeck[nextCardIndex].name));
    var target = $('.player' + playerID.toString() + ' ' + '.playerCard' + cardID.toString())
    var playerCard = $('<img />', { id: 'ok', src: 'assets/cards/' + card + '.png', alt: 'MyAlt' });
    target.html(playerCard);

    if (playerID == playerCount - 1) {
        playerID = 0;
        cardID++;
    } else {
        playerID++
    }
};


var dealer = 1;
var players = 1;
var playerCount = players + dealer;
var handSize = 2;
var playerID = 0
var cardID = 0

for (var i = 0; i < (playerCount * handSize) && i < myDeck.length; i++) {
    var nextCardIndex = nextCard();
    var card = (loadCardUi(myDeck[nextCardIndex].suit, myDeck[nextCardIndex].name));
    var target = $('.player' + playerID.toString() + ' ' + '.playerCard' + cardID.toString())
    var playerCard = $('<img />', { id: 'ok', src: 'assets/cards/' + card + '.png', alt: 'MyAlt' });

    target.html(playerCard);

    if (playerID == playerCount - 1) {
        playerID = 0;
        cardID++;
    } else {
        playerID++
    }
}
// for (i = 0; i < 2; i++)
// {
//     var card  = (loadCardUi(myDeck[i].suit, myDeck[i].name));
//     if ((playerCount + 1) % 2 == 0) {
//         var playerCard = $('<img />', { id: 'ok', src: 'assets/cards/' + card + '.png', alt: 'MyAlt' });
//         playerCard.appendTo($('.playerCard' + i.toString()));
//     }
//     else
//     {
//         var dealerCard = $('<img />', { id: 'ok', src: 'assets/cards/' + card + '.png', alt: 'MyAlt' });
//         dealerCard.appendTo($('.dealerCard' + i.toString()));
//     }
// }

