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
            cards.push(new card((n > 10) ? 10 : n + 1, this.names[n], this.suits[s]));
        }
    }
    return cards;
}

// old shuffle deck CUZ YOLO!!!!!
//function shuffle(o) {
//    for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x); return o;
//};

// new shuffle deck
function shuffleMy(deck) {
    var tempCard; // x
    var tempCardIndex; // j
    for (var i = deck.length - 1; i >= 0 ; i--) {
        tempCardIndex = parseInt(Math.random() * i);
        tempCard = deck[i];
        deck[i] = deck[tempCardIndex];
        deck[tempCardIndex] = tempCard;
    }
    return deck;
}

var currentCard = 0;

function nextCard() {
    var cardIndex = currentCard;
    currentCard++;

    return cardIndex;    
}