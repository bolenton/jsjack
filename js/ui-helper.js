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
    $(".avatar").attr("src", avatar);
}

// Ui Controler to setup board
var playerName;
var bet;
var playerBet;
var avatarName;

$("input:radio[name=person]").click(function () {
    avatarName = $(this).val();
});

$('.startGame').click(function () {
    console.log(avatarName);
    // Sets player stats and avatar on board
    playerName = $(".playerName").val();
    bet = $(".playerBet").val();
    playerBet = parseInt(bet);
    loadPlayerUi(playerName, playerBet, avatarName);

    calculatePlayerHand();
    
    // Valadates that player entered name and bet, before launching board.
    if (playerName.length > 0 && bet.length > 0 && !isNaN(playerBet) && bet <= 2000) {
        $('.dealerHandTotal').hide();
        $('.welcomePlayer').hide();
        $('.playAgain').hide();
        $('.gameBoard').show();
        alert("Game have begun");
        checkWinningConditions();
    }
    else {
        alert("Please enter your name, and $2000 or less to bet.");
    }
});

function placeNextPlayerCard(cardIndex) {
    var nextCardIndex = cardIndex + 1;
    var myCard = (loadCardUi(myDeck[nextCardIndex].suit, myDeck[nextCardIndex].name));
    var target = $('.player' + 1 + ' ' + '.playerCardSpot' + cardLocationID.toString());
    var playerCardImg = $('<img />', { id: 'ok', src: 'assets/cards/' + myCard + '.png', alt: 'MyAlt' });
    target.html(playerCardImg);

    cardLocationID += 1;
};

function placeNextDealerCard(cardIndex) {
    var nextCardIndex = cardIndex + 1;
    var myCard = (loadCardUi(myDeck[nextCardIndex].suit, myDeck[nextCardIndex].name));
    var target = $('.player' + 0 + ' ' + '.playerCardSpot' + dealerCardLocationID.toString());
    var playerCardImg = $('<img />', { id: 'ok', src: 'assets/cards/' + myCard + '.png', alt: 'MyAlt' });
    target.html(playerCardImg);

    dealerCardLocationID += 1;
};

function flipDealerCards() {
    var myCard = (loadCardUi(myDeck[2].suit, myDeck[2].name));
    var target = $('.player' + "0" + ' ' + '.playerCardSpot1')
    var playerCardImg = $('<img />', { id: 'ok', src: 'assets/cards/' + myCard + '.png', alt: 'MyAlt' });
    target.html(playerCardImg);
}

var dealer = 1;
var players = 1;
var playerCount = players + dealer;
var handSize = 2;
var playerID = 0
var cardLocationID = 0
var dealerCardLocationID = 2

for (var i = 0; i < (playerCount * handSize) && i < myDeck.length; i++) { //Loop should run 4 times
    var nextCardIndex = nextCard();
    var myCard = (loadCardUi(myDeck[nextCardIndex].suit, myDeck[nextCardIndex].name));
    var target = $('.player' + playerID.toString() + ' ' + '.playerCardSpot' + cardLocationID.toString())
    if (i == 2) {
        var playerCardImg = $('<img />', { id: 'ok', src: 'assets/cards/' + "b2fv" + '.png', alt: 'MyAlt' });
    }
    else {
        var playerCardImg = $('<img />', { id: 'ok', src: 'assets/cards/' + myCard + '.png', alt: 'MyAlt' });
    }

    target.html(playerCardImg);

    if (playerID == playerCount - 1) {
        playerID = 0;
        cardLocationID++;
    } else {
        playerID++
    }
}
