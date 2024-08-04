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
        // TODO add logic that allows player to add more hands
        this.player.setHands(2)
        for (let i = 0; i < 2; ++i) // each hand gets 2 cards
        {
            this.dealer.hands[0].addCard(this.deck.getCard())
            for (let j = 0; j < this.player.hands.length; ++j)
                this.player.hands[j].addCard(this.deck.getCard())
        }
     
        console.log("Dealer - ")
        this.dealer.printHands()
        console.log("Player - ")
        for (let hand of this.player.hands)
        {
            hand.printHand()
            if (hand.calculateTotal() < 21)
                hand.addCard(this.deck.getCard())
        }

        console.log("-----------------")
        this.player.printHands()
    }
}