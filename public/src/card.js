class Card {
    constructor(suit, name, value)
    {
        this.suit = suit;
        this.name = name;
        this.value = value;
    }

    printCard()
    {
        console.log(this.suit + this.name)
    }
}