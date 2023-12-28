import products from "../data/products.js";
// const $ = document.querySelector.bind(document);
const btnDecre = document.querySelector(".inumber-decrement");
const btnIncre = document.querySelector(".number-increment");
const inputValue = document.querySelector(".input-number");

let click = 1;
function decrement() {
  if (click >= 1) {
    click--;
  }
  inputValue.value = click;
}
btnDecre.onclick = decrement;

function increment() {
  if (click >= 0) {
    click++;
  }
  inputValue.value = click;
}
btnIncre.onclick = increment;
