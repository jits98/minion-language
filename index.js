let button = document.querySelector(".js-btn");
let inputElement = document.querySelector(".txtarea");

let outputElement = document.querySelector(".output");

button.addEventListener("click", clickHandler);

function clickHandler() {
  console.log("clicked");
  console.log(inputElement.value);
  outputElement.innerText = "I am Iron-Man";
}
