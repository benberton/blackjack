class Deck {
    constructor(numOfDecks) {
        this.numOfDecks = numOfDecks
        this.cards = [];
        this.fillDeck()
    
    }

    fillDeck()
    {
        const suits = ['♠', '♦', '♣', '♥'];
        const names = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        for (let i = 0; i < this.numOfDecks; ++i) {
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

    getCard()
    {
        if (this.cards.length == 0)
            this.fillDeck()
        return this.cards.pop()
    }

    printDeck() {
        for (const card of this.cards) {
            console.log(card.suit + " " + card.name + " " + card.value);
        }
    }

    shuffle(seed = Date.now()) {
        // PRNG function using a simple LCG algorithm
        function lcg(seed) {
            const a = 1664525;
            const c = 1013904223;
            const m = 2 ** 32;
            seed = (a * seed + c) % m;
            return seed / m;
        }

        let currentIndex = this.cards.length;
        let random = lcg(seed);

        // While there remain elements to shuffle...
        while (currentIndex != 0) {
            // Use PRNG to pick a remaining element
            random = lcg(random * 1000); // Re-seed with a new value based on previous result
            let randomIndex = Math.floor(random * currentIndex);
            currentIndex--;

            // And swap it with the current element
            [this.cards[currentIndex], this.cards[randomIndex]] = [
                this.cards[randomIndex], this.cards[currentIndex]];
        }
    }

    __isNumber(value) {
        return !isNaN(parseFloat(value)) && isFinite(value);
    }
}