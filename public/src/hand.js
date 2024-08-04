// const Card = require('./card')
class Hand {

    constructor() {
        this.cards = [];
    }

    calculateTotal()
    {
        let total = 0;
        for (let card of this.cards)
            total += card.value;
        return total
    }

    addCard(card)
    {
        this.cards.push(card);
    }

    getTotal()
    {
        return this.calculateTotal();
    }

    printHand()
    {
        for(let card of this.cards)
            card.printCard()
    }
}