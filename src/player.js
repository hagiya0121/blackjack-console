export default class Player {
  #bet = 0;
  #credit = 1000;
  #hand = [];
  #totalValue = 0;

  get bet() {
    return this.#bet;
  }

  get credit() {
    return this.#credit;
  }

  get hand() {
    return this.#hand;
  }

  get totalValue() {
    return this.#totalValue;
  }

  setBetAmount(amount) {
    this.#bet = amount;
    this.#credit -= amount;
  }

  hit(card) {
    this.#hand.push(card);
    this.#calcTotalValue();
  }

  double(card) {
    this.#hand.push(card);
    this.#calcTotalValue();
    this.#credit -= this.#bet;
    this.#bet *= 2;
  }

  #calcTotalValue() {
    const values = this.#hand.map((card) => card.getValue());
    let totalValue = values.reduce((acc, curr) => acc + curr);
    let aceCount = values.filter((value) => value === 11).length;
    while (totalValue > 21 && aceCount > 0) {
      totalValue -= 10;
      aceCount--;
    }
    this.#totalValue = totalValue;
  }
}
