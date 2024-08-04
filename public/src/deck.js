class Deck {
    constructor(numOfDecks) {
        this.cards = [];
        const suits = ['♠', '♦', '♣', '♥'];
        const names = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        for (let i = 0; i < numOfDecks; ++i) {
            for (const suit of suits) {
                for (const name of names) {
                    let value = 0;
                    if (this.__isNumber(name)) {
                        value = parseInt(name);
                    } else if (name === 'A') {
                        value = 11;
                    } else {
                        value = 10;
                    }
                    let card = new Card(suit, name, value);
                    this.cards.push(card);
                }
            }
        }
    }

    printDeck() {
        for (const card of this.cards) {
            console.log(card.suit + " " + card.name + " " + card.value);
        }
    }

    __isNumber(value) {
        return !isNaN(parseFloat(value)) && isFinite(value);
    }
}