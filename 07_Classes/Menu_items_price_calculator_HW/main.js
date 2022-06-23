"use strict";

class MenuPrice {
  #item1 = 2;
  #item2 = 5;
  constructor(amount1, amount2) {
    this.amount1 = amount1;
    this.amount2 = amount2;
  }
  mixIngredients() {
    return this.amount1 * this.#item1 + this.amount2 * this.#item2;
  }
  get mix() {
    return this.mixIngredients();
  }
}

let pizzaMenu = new MenuPrice(5, 7);
let burgerMenu = new MenuPrice(10, 20);
console.log(pizzaMenu.mix);
console.log(burgerMenu.mix);

console.log("-------------------------------------");
