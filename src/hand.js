// const Card = require('./card')
class Hand {

    constructor(cards) {
        this.cards = cards;
    }

    calculateTotal()
    {
        let total = 0;
        for (card in this.cards)
            total += card.value;
        return total
    }

    set addCard(card)
    {
        this.cards.push(card);
    }

    get getTotal()
    {
        return this.calculateTotal();
    }
}