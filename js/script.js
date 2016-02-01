// imports my Deck object from deck.js - I separated these to stay DRY
var imported = document.createElement('script');
imported.src = 'js/deck.js';
document.head.appendChild(imported);

// Setup Main game objects
var Dealer = {};
var Player = {};
var myDeck = new Deck();

// Ui Setup Controls and Game initializer
(function () {
    $(document).ready(function () {
        $('.game').hide();
    })

    $('.startGame').click(function () {
        $('.setUpUi').hide();
        $('.game').show();
        startGame();
    });
})();

// Game play Logic
myDeck = shuffle(myDeck);

$('playerHit').click(function () {
    alert(myDeck[0].name + " of " + myDeck[0].suit);
    var card0 = (loadCardUi(myDeck[0].suit, myDeck[0].name));
    var c0 = card0.toLowerCase();
 
})

var playerCard1 = $('<img />', { id: 'ok', src: 'assets/cards/' + c0 + '.png', alt: 'MyAlt' });
playerCard1.appendTo($('#playerCard1'));
var playerCard2 = $('<img />', { id: 'ok', src: 'assets/cards/' + c1 + '.png' });
playerCard2.appendTo($('#playerCard2'));
var playerCard3 = $('<img />', { id: 'ok', src: 'assets/cards/' + c2 + '.png' });
playerCard3.appendTo($('#playerCard3'));
var playerCard4 = $('<img />', { id: 'ok', src: 'assets/cards/' + c3 + '.png' });
playerCard4.appendTo($('#playerCard4'));
var playerCard5 = $('<img />', { id: 'ok', src: 'assets/cards/' + c4 + '.png' });
playerCard5.appendTo($('#playerCard5'));
var playerCard6 = $('<img />', { id: 'ok', src: 'assets/cards/' + c5 + '.png' });
playerCard6.appendTo($('#playerCard6'));