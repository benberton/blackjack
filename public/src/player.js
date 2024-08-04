class Player {
    constructor(name) {
        this.name = name;
        this.hands = []
        this.total = 10000
    }

    setHands(count) {
        this.hands = []
        for (let i = 0; i < count; ++i)
            this.hands.push(new Hand()) // setting empty hands
    }

    printHands()
    {
        for(let hand of this.hands)
            hand.printHand()
    }
}