// Create Card Object
function card(value, name, suit) {
    this.value = value;
    this.name = name;
    this.suit = suit;
}

// Create Deck
function Deck() {
    this.names = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    this.suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
    var cards = [];

    for (var s = 0; s < this.suits.length; s++) {
        for (var n = 0; n < this.names.length; n++) {
            cards.push(new card(n + 1, this.names[n], this.suits[s]));
        }
    }
    return cards;
}

// shuffle deck
function shuffle(o) {
    for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

// Deck Ui Controller
function loadCardUi(name, suit) {
    var s = suit[0].toLowerCase();
    var n = name[0].toLowerCase();
    return n + s;
}
var dealer = 1;
var players = 1;
var playerCount = players + dealer;
var handSize = 2;
function dealCards() {
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
    var playerID = 0
    var cardID = 0
    for (var i = 0; i < (playerCount * handSize) && i < myDeck.length; i++) {
        var card = (loadCardUi(myDeck[i].suit, myDeck[i].name));
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
}
// function createHand() {
//     var hand = ""

//     for (var i = 0; i < handSize; i++) {
//         var card = "<div class=' playerCard" + i + " column'></div>"
//         hand += card;

//     }
//     for (var i = 0; i < playerCount; i++) {
//         var target = $('.player' + i.toString() + '-hand')
//         target.html(hand)
//     }
// }