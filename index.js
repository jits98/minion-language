let userName = prompt("Write your name", "Name");

alert("Welcome " + userName);

let button = document.querySelector(".js-btn");

button.addEventListener("click", clickHandler);

function clickHandler() {
  console.log("clicked");
}
