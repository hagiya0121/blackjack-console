import Card from "./card.js";

const SUITS = ["♥", "♦", "♣", "♠"];
const RANKS = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A",
];

export default class Deck {
  #cards = [];

  constructor() {
    this.#cards = this.#createCards();
  }

  drawCard() {
    const randomIndex = Math.floor(Math.random() * this.#cards.length);
    return this.#cards.splice(randomIndex, 1)[0];
  }

  reset() {
    this.#cards = this.#createCards();
  }

  remainingCards() {
    return this.#cards.length;
  }

  #createCards() {
    return SUITS.flatMap((suit) => RANKS.map((rank) => new Card(suit, rank)));
  }
}
