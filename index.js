let button = document.querySelector(".js-btn");
let inputElement = document.querySelector(".txtarea");

button.addEventListener("click", clickHandler);

function clickHandler() {
  console.log("clicked");
  console.log(inputElement.value);
}

//document.querySelector('textarea')
//document.querySelector('.btn-primary')
//document.querySelector('#input-btn')
//document.querySelector('input[type='translator']')
