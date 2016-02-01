// Create Card Object
function card(value, name, suit){
	this.value = value;
	this.name = name;
	this.suit = suit;
}

// Instanciate Deck
function Deck(){
	this.names = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
	this.suits = ['Hearts','Diamonds','Spades','Clubs'];
	var cards = [];
    
    for( var s = 0; s < this.suits.length; s++ ) {
        for( var n = 0; n < this.names.length; n++ ) {
            cards.push( new card( n+1, this.names[n], this.suits[s] ) );
        }
    }
    return cards;
}

// shuffle deck
function shuffle(o) {
	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
};

// Deck Ui Controller
function loadCardUi(name, suit){
    var s = suit[0].toLowerCase();
    var n = name[0].toLowerCase();
    return n+s;
}

