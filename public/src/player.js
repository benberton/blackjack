class Player {
    constructor(name) {
        this.name = name;
        this.hands = []
        this.total = 10000
    }

    set addHand(hand) {
        this.hands.push(hand)
    }
}