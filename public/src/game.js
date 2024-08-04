class Game {
    constructor()
    {
        this.deck = new Deck(2)
        this.deck.shuffle()
        this.player = new Player("Ben")
        this.dealer = new Player("Dealer")
    }

    round()
    {
        this.dealer.setHands(1) // dealer only has one hand
        this.player.setHands(1)
        for (let i = 0; i < 2; ++i) // each hand gets 2 cards
        {
            this.dealer.hands[0].addCard(this.deck.getCard())
            for (let j = 0; j < this.player.hands.length; ++j)
                this.player.hands[j].addCard(this.deck.getCard())
        }
     
        console.log("Dealer")
        this.dealer.printHands()
        console.log(this.dealer.hands[0].getTotal())
        console.log("Player")
        this.player.printHands()
        console.log(this.player.hands[0].getTotal())

    }
}